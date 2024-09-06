import { useStorage } from "@vueuse/core";

export const useLinkMemberStore = defineStore('active-linked-member', () => {
  const memcode = useStorage('memcode', '');
  const amount = useStorage('amount', 0);
  const qrcode = useStorage('qrcode', '');
  const accNo = useStorage('accNo', '');
  const data = useStorage('txdata', []);

  return {
    memcode,
    amount,
    qrcode,
    accNo,
    data,
  }
});