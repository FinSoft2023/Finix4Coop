export default defineEventHandler(async (event) => {
  return await callPostToServer(event, '/api/guarantee');
});
