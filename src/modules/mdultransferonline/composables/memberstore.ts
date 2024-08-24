export const useLinkMemberStore = defineStore('active-linked-member', () => {
  const memcode = ref('');
  const amount = ref(0);
  const qrcode = ref('');
  const accNo = ref('');

  return {
    memcode,
    amount,
    qrcode,
    accNo,
  }
});