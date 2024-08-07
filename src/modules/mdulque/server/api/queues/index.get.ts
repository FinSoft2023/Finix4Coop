export default defineEventHandler(async (event) => {
  return await callGetListToServer(event, {
    filterBy: 'status',
    filterOp: 'ne',
  });
});
