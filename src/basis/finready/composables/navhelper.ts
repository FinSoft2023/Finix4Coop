import type { ModuleRealmItemBlueprint } from 'bigplatdefibp';
import type { RouteLocationNormalized } from 'vue-router';

export interface SmartPageInfo {
  label: string;
  to: string;
  icon?: string;
  description?: string;
}

export function useSmartTabs(tabs: SmartPageInfo[]) {
  provide('active-smart-tabs', tabs);
}

export function getSmartTabs() {
  return inject<SmartPageInfo[]>('active-smart-tabs', []);
}

function getSubLink(
  link: string,
  moduleName: string,
  route: RouteLocationNormalized,
) {
  const id = route.params.id;
  if (id) {
    return `/${moduleName}/${id}${link}`;
  } else {
    return `/${moduleName}${link}`;
  }
}

export function useSubLinks(
  links: SmartPageInfo[],
  pageDef: ModuleRealmItemBlueprint,
) {
  provide('active-sub-link', { links, moduleName: pageDef.moduleName });
}

export function getSubLinks(route: RouteLocationNormalized) {
  const { links: rawLinks, moduleName } = inject<{
    links: any[];
    moduleName: string;
  }>('active-sub-link', { links: [], moduleName: '' });
  const usableLinks = rawLinks.map((link) => {
    return {
      ...link,
      to: getSubLink(link.to, moduleName, route),
      label: link.label,
      icon: link.icon,
      description: link.description,
    };
  });
  return usableLinks;
}

const useSmartStepStore = defineStore('smart-step-store', () => {
  const activeStep = ref('');

  const moduleName = ref('');
  const realmName = ref('');

  const { data: steps, refresh } = useFetch<any[]>(
    () => `/api/${moduleName.value}/${realmName.value}/steps`,
    {
      immediate: false,
      watch: false,
    },
  );

  function setCurrent(
    pageDef: ModuleRealmItemBlueprint,
    firstStep: boolean = false,
  ) {
    const isFirstStep =
      firstStep ||
      moduleName.value !== pageDef.moduleName ||
      realmName.value !== pageDef.realmName ||
      activeStep.value !== pageDef.name;

    moduleName.value = pageDef.moduleName;
    realmName.value = pageDef.realmName;
    activeStep.value = pageDef.name;

    if (isFirstStep) {
      refresh();
    }
  }

  function getNextStep(pageDef: ModuleRealmItemBlueprint) {
    const currentIndex =
      steps.value?.findIndex((step) => step.id === pageDef.name) ?? 0;
    const nextIndex = (currentIndex + 1) % (steps.value?.length ?? 1);

    return steps.value?.at(nextIndex)?.id ?? '';
  }

  return {
    steps,
    activeStep,
    setCurrent,
    getNextStep,
  };
});

export function useSmartStepper(
  pageDef: ModuleRealmItemBlueprint,
  firstStep: boolean = false,
) {
  // const { moduleName, realmName, name: activeName } = pageDef;
  // const stepData = { moduleName, realmName, activeName };
  // provide('active-smart-stepper', stepData);
  const store = useSmartStepStore();
  store.setCurrent(pageDef, firstStep);
}

export function getNextStep(pageDef: ModuleRealmItemBlueprint) {
  // const { moduleName, realmName, name: activeName } = pageDef;
  // const { steps } = getSmartStepper();
  // const currentIndex = steps.value?.findIndex((step) => step.id === activeName);
  // const nextIndex = (currentIndex + 1) % (steps.value?.length ?? 1);

  // return steps.value[nextIndex].id;
  const store = useSmartStepStore();
  return store.getNextStep(pageDef);
}

export function getSmartStepper() {
  // const { moduleName, realmName, activeName } = inject<{
  //   moduleName: string;
  //   realmName: string;
  //   activeName: string;
  // }>('active-smart-stepper', { moduleName: '', realmName: '', activeName: '' });
  // const { data: steps } = useFetch(`/api/${moduleName}/${realmName}/steps`);
  // const activeStep = ref(activeName);

  // return { steps, activeStep };
  const store = useSmartStepStore();
  const { steps, activeStep } = storeToRefs(store);
  return { steps, activeStep };
}
