export default defineEventHandler(async (event) => {
  return await callPostToServer(event, '/api/savingacctxs', 'images');
});