export default defineEventHandler(async (event) => {
  // return await callPutToServer(event, '/api/queues/1234');
  const query = getQuery(event);
  console.log('query', query);
  console.log('query.id', query.id);

  return [];
});
