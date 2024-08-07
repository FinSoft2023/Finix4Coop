export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  return await callPutToServer(event, `/api/queues/${query.id}`);
});
