export const useQrStore = defineStore('active-qr-store', () => {
  const qrCode = ref('');

  return { qrCode };
});
