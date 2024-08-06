export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { txid } = query;

  return await callPutToServer(event, `/api/savingacctxs/${txid}`);
});
