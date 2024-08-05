import type { AsideLink } from '@nuxt/ui-pro/types';

export function setNavLinks(links: AsideLink[]) {
  const settingStore = useThemeSettings();
  settingStore.setNavLinks(links);
}

type ModulePageOption = {
  label: string;
  icon?: string;
  to?: string;
};

export function setModulePageRoot(pages: ModulePageOption[]) {
  provide('module-breadcrumb-root-pages', pages);
}

export function useModulePageLevels(page?: ModulePageOption | string) {
  const pagesBase = inject<ModulePageOption[]>(
    'module-breadcrumb-pages',
    inject<ModulePageOption[]>('module-breadcrumb-root-pages', []),
  );
  let pages = [...pagesBase];

  if (typeof page === 'string') {
    const pageOption = { label: page };
    pages.push(pageOption);
  } else if (page) {
    const pageOption = page;
    pages.push(pageOption);
  } else {
    return pages;
  }
  provide('module-breadcrumb-pages', pages);
  return pages;
}

export function useBreadcrumb(page: ModulePageOption | string) {
  const pagesRoot = inject<ModulePageOption[]>(
    'module-breadcrumb-root-pages',
    [],
  );
  let pages = [...pagesRoot];

  if (typeof page === 'string') {
    const pageOption = { label: page };
    pages.push(pageOption);
  } else if (page) {
    const pageOption = page;
    pages.push(pageOption);
  }
  provide('module-breadcrumb-pages', pages);
  return pages;
}
