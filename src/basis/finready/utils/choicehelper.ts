import { bigDataLinkFactory } from 'bigplatdefibp';

// TODO: Replace with actual implementation
const { getChoicesList } = bigDataLinkFactory();

export function listAllChoicesAvailable(
  choiceName: string,
  options: { labelField?: string; valueField?: string; big?: boolean },
) {
  if (!choiceName) {
    throw new Error('choices definition is required');
  }

  const { labelField = 'name', valueField = 'id', big = false } = options ?? {};

  function getChoicesFromRef(choiceName: string) {
    if (choiceName.startsWith('list:') || choiceName.length <= 4) {
      return '';
    }
    const choiceRefName = choiceName.slice(4);
    // TODO: Split if separated with '/'
    const choicesUrl = `/api/${choiceRefName}`;

    return choicesUrl;
  }

  const choiceTypeIsList = choiceName.startsWith('list:');
  const choicesUrl = getChoicesFromRef(choiceName);
  const _q = ref('');
  const query = computed(() => {
    return !_q.value ? {} : { q: _q.value };
  });
  const {
    data,
    pending: queryPending,
    refresh,
  } = useFetch<any[]>(() => choicesUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    query,
    immediate: !choiceTypeIsList && !big,
  });

  // TODO: map choicesList to options
  const choicesList = computed(() =>
    choiceTypeIsList
      ? getChoicesList(choiceName) ?? []
      : data.value?.map((it: any) => {
          return { value: it[valueField], label: it[labelField] };
        }) ?? [],
  );

  async function searchList(query: string) {
    const result = choicesList.value.filter((choice: any) =>
      choice.label.toLowerCase().includes(query.toLowerCase()),
    );
    return result;
  }

  const hasStarted = ref(false);
  async function searchQuery(q: string) {
    if ((!big || !!q) && q !== _q.value) {
      hasStarted.value = true;
      _q.value = q;
      await refresh();
    }

    return choicesList.value;
  }

  const search = choiceTypeIsList ? searchList : searchQuery;
  const pending = computed(
    () => !choiceTypeIsList && queryPending.value && hasStarted.value,
  );

  return { choicesList, pending, search };
}
