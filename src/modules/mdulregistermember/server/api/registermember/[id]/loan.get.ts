export default defineEventHandler(async (event) => {
  return await callGetToServer(event, '/api/registermember', 'Spouse');
});
