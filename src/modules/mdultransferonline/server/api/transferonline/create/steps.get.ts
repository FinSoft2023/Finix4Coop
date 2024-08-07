export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'Step 1' },
    // { id: 'qrcode', label: '2', description: 'QR Code' },
    { id: 'confirm', label: '2', description: 'Confirm' },
  ];
});
