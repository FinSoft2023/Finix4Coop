export default defineEventHandler(async (event) => {
  return await callGetListToServer(event, {
    filterBy: 'memcode',
    filterOp: 'eq',
  });
});
