export default defineEventHandler(async (event) => {
  return await callPutToServer(event, '/api/loangeneralmember', 'loanshare');
});
