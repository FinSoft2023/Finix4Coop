export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'เลข ปปช' },
    // { id: 'IdCard', label: '2', description: 'เลข ปปช' },
    { id: 'numberPhone', label: '2', description: 'เบอร์โทร' },
    { id: 'otp', label: '3', description: 'OTP' },
    // { id: 'safeSettings', label: '4', description: 'ตั้งค่าความปลอดภัย' },
    { id: 'confirm', label: '4', description: 'ตั้งค่าความปลอดภัย' },
  ];
});
