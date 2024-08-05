import type { ModuleBlueprintReference } from "bigplatdefibp";

export function setActiveModule(module: ModuleBlueprintReference) {
  provide('active-module-ref', module);
  return module;
}

export function useActiveModule() {
  return inject('active-module-ref')! as ModuleBlueprintReference;
}

export function useActiveModulePage(name: string) {
  const module = useActiveModule();
  const page = module.ref(name);

  if (!page) {
    throw new Error(`Page ${name} not found in module ${module.name}`);
  }

  return page;
}