export default defineEventHandler(async (event) => {
  return await callGetListToServer(event, {
    url: '/api/regmembers', 
    // filterBy: 'memcode',
    // filterOp: 'xis',
  });
});
