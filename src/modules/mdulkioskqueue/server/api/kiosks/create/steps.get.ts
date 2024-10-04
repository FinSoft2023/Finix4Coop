export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: ' ถ่ายรูป' },
    { id: 'choice', label: '2', description: 'เลือกดำเนินการ' },
    { id: 'scankiosk', label: '3', description: 'Scan QR Code' },
    { id: 'confirm', label: '4', description: 'Confirm' },
  ];
});
