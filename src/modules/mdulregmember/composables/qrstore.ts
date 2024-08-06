export const useQrStore = defineStore('active-qr-store', () => {
  const qrCode = ref('');
  const reqAmount = ref(0);

  return { qrCode, reqAmount };
});
