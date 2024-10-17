export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'รหัสสมาชิก' },
    { id: 'IdCard', label: '2', description: 'เลข ปปช' },
    { id: 'numberPhone', label: '3', description: 'เบอร์โทร' },
    { id: 'otp', label: '4', description: 'OTP' },
    // { id: 'safeSettings', label: '4', description: 'ตั้งค่าความปลอดภัย' },
    { id: 'confirm', label: '5', description: 'ตั้งค่าความปลอดภัย' },
  ];

});
