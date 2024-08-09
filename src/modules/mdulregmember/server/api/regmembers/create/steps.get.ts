export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'กรอกข้อมูล' },
    { id: 'confirm', label: '2', description: 'ตรวจสอบข้อมูล' },
  ];
});
