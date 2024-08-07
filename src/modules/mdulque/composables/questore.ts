export const useQueStore = defineStore('active-queue-store', () => {
  const queue = ref<any>();
  const member = ref<any>();

  return { queue, member };
});