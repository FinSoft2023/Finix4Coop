import type { AsideLink, HeaderLink } from '@nuxt/ui-pro/types';

export const useThemeSettings = defineStore('theme-fin-setting', () => {
  const navLinks = ref<AsideLink[]>([]);
  const headLinks = ref<HeaderLink[]>([]);

  function setNavLinks(links: AsideLink[]) {
    navLinks.value = links;
  }

  return {
    navLinks,
    headLinks,
    setNavLinks,
  };
});
