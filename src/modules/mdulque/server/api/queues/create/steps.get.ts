export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'ค้นหาข้อมูลสมาชิก' },
    { id: 'confirm', label: '2', description: 'ตรวจสอบข้อมูล' },
  ];
});
