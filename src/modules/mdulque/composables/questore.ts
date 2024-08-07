export const useQueStore = defineStore('active-queue-store', () => {
  const queue = ref<any>();

  return { queue };
});