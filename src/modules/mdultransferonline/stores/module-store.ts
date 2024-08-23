
export const useModuleStore = defineStore('store', () => {

  const setdata = ref({
    memberId:'',
    accountNo: ''

  });

  return { setdata }
});