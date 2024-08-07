export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { amount, memcode } = body;

  // return await callPutToServer(event, '/api/regmembers');
  const result = await $fetch(
    'https://ppay-proxy-newgw.azurewebsites.net/api/deposit',
    {
      method: 'POST',
      body: {
        MemberCode: memcode,
        AmountThb: amount * 1000,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return result;
});
