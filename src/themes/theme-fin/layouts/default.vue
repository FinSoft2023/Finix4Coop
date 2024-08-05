<template>
  <div>
    <UHeader :links="headLinks">
      <template #logo>
        <img class="w-auto h-6"
          src="/logo-theme-fin.jpg"
          alt="Fin Theme Logo" />
        FIN Theme
      </template>

      <template #right>
        <UColorModeButton />

        <UButton to="https://github.com/FinSoft2023/finix24q2"
          target="_blank"
          icon="i-logos-github-icon"
          color="gray"
          variant="ghost" />
      </template>

      <template #panel>
        <UNavigationTree :links="navLinks" />
      </template>
    </UHeader>
    <UContainer>

      <slot></slot>

      <UFooter>
        <template #left>
          Copyright © {{ new Date().getFullYear() }}
        </template>

        <template #right>
          <UButton icon="i-logos-github-icon"
            color="gray"
            variant="ghost"
            to="https://x.com/nuxt_js"
            target="_blank" />
          <UButton icon="i-logos-airflow-icon"
            color="gray"
            variant="ghost"
            to="https://discord.com/invite/ps2h6QT"
            target="_blank" />
          <UButton icon="i-logos-flannel"
            color="gray"
            variant="ghost"
            to="https://github.com/nuxt/nuxt"
            target="_blank" />
        </template>
      </UFooter>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const themeSettings = useThemeSettings();
const { headLinks, navLinks } = storeToRefs(themeSettings);
</script>