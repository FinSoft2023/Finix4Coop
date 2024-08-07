export const useLinkMemberStore = defineStore('active-linked-member', () => {
  const memcode = ref('');
  const amount = ref(0);

  return {
    memcode,
    amount,
  }
});