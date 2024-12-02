export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'Step 1' },
    { id: 'memberFamily', label: '2', description: 'memberFamily' },
    // { id: 'beneficiary', label: '3', description: 'beneficiary' },
    { id: 'confirm', label: '3', description: 'Confirm' },
  ];
});
