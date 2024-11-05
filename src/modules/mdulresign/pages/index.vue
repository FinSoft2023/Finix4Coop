<template>
  <BSideNavPage>
    <UPageBody>
      <UPageGrid>
        <UPageCard v-for="(module, index) in modules"
          :key="index"
          v-bind="module">
          <template #description>
            <span class="line-clamp-2">{{ module.description }}</span>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageBody>

    <!-- <template #side>
      <UPageLinks title="Discover"
        class="pt-0 lg:pt-8"
        :links="[{ icon: 'i-heroicons-pencil-square', label: 'Edit this page' }, { icon: 'i-heroicons-star', label: 'Star on GitHub', to: 'https://github.com/nuxt/ui', target: '_blank' }, { icon: 'i-heroicons-book-open', label: 'Nuxt documentation', to: 'https://nuxt.com', target: '_blank' }]" />
    </template> -->
  </BSideNavPage>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Resign', to: '/resign' },
  { label: 'Create', to: '/resign/create' },
]);

const modules = [{
  title: 'Scan QR',
  description: 'ค้นหารายการคำขอจากเอกสาร',
  to: '/',
  icon: 'i-mdi-scan-helper'
},{
  title: 'รายการคำขอ',
  description: 'ลาออกจากการเป็นสมาชิก',
  to: '/resign',
  icon: 'i-mdi-file-report-outline'
}, {
  title: 'พิมพ์รายงาน',
  description: 'รายการเข้าคณะกรรมสหกรณ์',
  to: '/resign/print',
  icon: 'i-heroicons-printer'
},{
  title: 'ปริ้นรายงานประจำเดือน',
  description: 'ออกรายงานเข้าที่ประชุมประจำเดือน',
  to: '/resign/print',
  icon: 'i-heroicons-printer'
}]
</script>
