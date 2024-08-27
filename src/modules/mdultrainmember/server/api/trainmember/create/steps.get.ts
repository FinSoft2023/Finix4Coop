export default defineEventHandler(async (event) => {
  return [
    { id: 'root', label: '1', description: 'Step 1' },
    { id: 'train', label: '2', description: 'Step 2' },
    { id: 'confirm', label: '3', description: 'Confirm' },
  ];
});
