import type { ModuleRealmItemBlueprint } from 'bigplatdefibp';

/**
 * Custom hook for making API calls to the host server.
 *
 * @param item - The module realm item blueprint.
 * @returns An object containing the API methods and properties.
 */
export function useLocalStage(item: ModuleRealmItemBlueprint) {
  if (!item) {
    throw new Error('item is required');
  }

  const hasGet = !!item.pathUrl.get;
  const hasPost = !!item.pathUrl.post;
  // const getOnly = hasGet && !hasPost;

  // const route = useRoute();
  // const id = route.params.id?.toString();

  // const _data = ref<any>();
  const _error = ref<any>();
  // const _pending = ref<boolean>(false);

  const store = useAppLocalStore(item.moduleName, item.realmName)();
  const { data, pending, postResult } = storeToRefs(store);
  const { executePost } = store;

  let fnGet: (query?: MaybeRef<any>) => {
    data: Ref<any>;
    error: Ref<any>;
    pending: Ref<boolean>;
    execute: () => Promise<void>;
  };

  fnGet = (_query: MaybeRef<any>) => {
    const execute = () => Promise.resolve();
    return { data, error: _error, pending, execute };
  };

  let fnPost: (query?: MaybeRef<any>) => {
    postResult: Ref<any>;
    error: Ref<any>;
    pending: Ref<boolean>;
    executePost: (body: MaybeRef<any>) => Promise<void>;
  };

  fnPost = (_: MaybeRef<any>) => {
    // const executePost = (_: MaybeRef<any>) => Promise.resolve();
    return {
      postResult,
      error: _error,
      pending,
      executePost,
    };
  };

  return {
    hasGet,
    hasPost,
    apiGet: fnGet,
    apiPost: fnPost,
  };
}

const useAppLocalStore = (moduleName: string, realmName: string) =>
  defineStore(`locl-stor-${moduleName}-${realmName}`, () => {
    const data = ref<any>({});
    const pending = ref(false);

    const postResult = computed(() => data.value);

    async function executePost(body: MaybeRef<any>) {
      const _body = unref(body);
      if (!_body) return;

      Object.assign(data.value, _body);
    }

    return {
      data,
      pending,
      postResult,
      executePost,
    };
  });
