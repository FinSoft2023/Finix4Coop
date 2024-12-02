export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'เรียกค้ว' },
    { id: 'confirm', label: '2', description: 'ยืนยันคิว' },
  ];
});
