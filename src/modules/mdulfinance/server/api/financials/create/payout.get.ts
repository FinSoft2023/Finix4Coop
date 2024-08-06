export default defineEventHandler(async (event) => {
  return await callGetListToServer(event, { url: '/api/savingacctxs' });
});
