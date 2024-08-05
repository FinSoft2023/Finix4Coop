import type { ModuleRealmItemBlueprint } from 'bigplatdefibp';
import { useMutation, useQuery } from '@tanstack/vue-query';

/**
 * Retrieves the entry schema based on the provided module realm item blueprint.
 * If the item has a subName, it returns the schema and fields of the sub entity.
 * Otherwise, it returns the schema and root entries of the entity.
 *
 * @param item - The module realm item blueprint.
 * @param forSubName - Optional subName to override the item's subName. You need to specify this if you want to get the schema and entries for 'root'.
 * @returns An object containing the schema and entries.
 * @throws {Error} If the item is not provided or if the sub is not found.
 */
export function getEntrySchema(
  item: ModuleRealmItemBlueprint,
  forSubName?: string,
) {
  if (!item) {
    throw new Error('item is required');
  }

  // if ((!item.subName && !forSubName) || item.name === 'root') {
  if (!item.subName && !forSubName) {
      const entries = item.entity.root;
    const schema = item.entity.schema;
    return { schema, entries };
  }

  const subName = forSubName || item.subName;
  const sub = item.entity.sub?.find((s) => s.name === subName);

  if (!sub) {
    throw new Error('sub not found');
  }

  const entries = sub.fields;
  const schema = sub.schema;

  return { entries, schema };
}

/**
 * Custom hook for making API calls to the host server.
 *
 * @param item - The module realm item blueprint.
 * @returns An object containing the API methods and properties.
 */
export function useHostApi(item: ModuleRealmItemBlueprint) {
  if (!item) {
    throw new Error('item is required');
  }

  const hasGet = !!item.pathUrl.get;
  const hasPost = !!item.pathUrl.post;
  const getOnly = hasGet && !hasPost;

  const route = useRoute();
  const id = route.params.id?.toString();

  const _data = ref<any>();
  const _error = ref<any>();
  const _pending = ref<boolean>(false);

  let fnGet: (query?: MaybeRef<any>) => {
    data: Ref<any>;
    error: Ref<any>;
    pending: Ref<boolean>;
    execute: () => Promise<void>;
  };

  if (!!item.pathUrl.get) {
    const itemUrl = item.pathUrl.get.replace(':id', id).replace('/index', '');
    const url = `/api/${item.moduleName}${itemUrl}`;
    const query = ref<any>({});
    const {
      data: dataFetch,
      error,
      pending,
      execute,
    } = useFetch<any>(url, {
      method: 'GET',
      query,
      immediate: !window || !getOnly,
    });
    if (getOnly) {
      const {
        data: dataQuery,
        isPending,
        refetch,
      } = useQuery<any>({
        queryKey: [item.moduleName, item.entity.name, 'get', itemUrl, query],
        queryFn: async ({ queryKey }) => {
          const [, , , , _qry] = queryKey;
          query.value = _qry;
          await execute();
          return dataFetch.value ?? [];
        },
      });
      fnGet = (qry: MaybeRef<any>) => {
        if (!!qry) {
          const _qry = ref(qry);
          query.value = _qry.value;
        }
        const execute = async () => {
          await refetch();
        };
        return { data: dataQuery, error, pending: isPending, execute };
      };
    } else {
      fnGet = (qry: MaybeRef<any>) => {
        if (!!qry) {
          const _qry = ref(qry);
          query.value = _qry.value;
        }
        return { data: dataFetch, error, pending, execute };
      };
    }
  } else {
    fnGet = (_query: MaybeRef<any>) => {
      const execute = () => Promise.resolve();
      return { data: _data, error: _error, pending: _pending, execute };
    };
  }

  let fnPost: (query?: MaybeRef<any>) => {
    postResult: Ref<any>;
    error: Ref<any>;
    pending: Ref<boolean>;
    executePost: (body: MaybeRef<any>) => Promise<void>;
  };

  if (!!item.pathUrl.post) {
    const itemUrl = item.pathUrl.post.replace(':id', id).replace('/index', '');
    const url = `/api/${item.moduleName}${itemUrl}`;
    const query = ref<any>({});
    const body = ref<any>({});
    const {
      data: postResult,
      error,
      isPending,
      mutateAsync,
    } = useMutation<any>({
      mutationKey: [item.moduleName, item.entity.name, 'post', itemUrl],
      mutationFn: async (body: any) => {
        return $fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          query,
          body,
        });
      },
    });
    fnPost = (qry: MaybeRef<any>) => {
      const executePost = async (bdy: MaybeRef<any>) => {
        const _qry = ref<any>(qry);
        query.value = _qry.value;

        const _body = unref(bdy);
        body.value = _body;

        await mutateAsync(body.value);
      };
      return { postResult, error, pending: isPending, executePost };
    };
  } else {
    fnPost = (_: MaybeRef<any>) => {
      const executePost = (_: MaybeRef<any>) => Promise.resolve();
      return {
        postResult: _data,
        error: _error,
        pending: _pending,
        executePost,
      };
    };
  }

  return {
    hasGet,
    hasPost,
    apiGet: fnGet,
    apiPost: fnPost,
  };
}
