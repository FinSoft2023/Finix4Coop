export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'กรอกข้อมูลสมาชิก' },
    { id: 'bindaccount', label: '2', description: 'สแกนระบุตัวตน' },
    { id: 'confirmBindaccount', label: '3', description: 'ยืนยันการระบุตัวตน' },
    { id: 'confirm', label: '4', description: 'ยืนยันข้อมูล' },
  ];
});
