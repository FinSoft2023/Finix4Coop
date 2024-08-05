<template>
  <BSideNavPage>
    <UPageBody>
      <h2>Index Page</h2>
    </UPageBody>

    <template #side>
      <UPageLinks title="Discover"
        class="pt-0 lg:pt-8"
        :links="[{ icon: 'i-heroicons-pencil-square', label: 'Edit this page' }, { icon: 'i-heroicons-star', label: 'Star on GitHub', to: 'https://github.com/nuxt/ui', target: '_blank' }, { icon: 'i-heroicons-book-open', label: 'Nuxt documentation', to: 'https://nuxt.com', target: '_blank' }]" />
    </template>
  </BSideNavPage>
</template>

<script setup lang="ts">
setNavLinks([{
  label: 'Withdrawals',
  icon: 'i-heroicons-book-open',
  to: '/withdrawals'
}, {
  label: 'Cheque(s)',
  icon: 'i-mdi-face-recognition',
  to: '/cheques'
}, {
  label: 'Financials',
  icon: 'i-heroicons-map',
  to: '/financials'
}, {
  label: 'Accounting',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/accounting'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]);
</script>