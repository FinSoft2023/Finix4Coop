export default defineEventHandler(async (event) => {
  const { apiServer } = useRuntimeConfig(event);
  const { baseURL } = apiServer;
  const targetUrl = `${baseURL}/api/regmembers`;

  const body = await readBody(event);
  const { amount, memcode } = body;

  console.log('deposit', amount, memcode);

  const existingMember = await $fetch<any[]>(targetUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    query: {
      'fltr-by': 'memcode',
      'fltr-val': memcode,
      'fltr-op': 'eq',
    },
  });

  if (!existingMember || existingMember.length === 0) {
    // Not found member ERROR!
    return {};
  }

  const member = existingMember[0];
  const newBalance = member.balance + amount;
  const result = await $fetch(`${targetUrl}/${member.id}`, {
    method: 'PUT',
    body: {
      balance: newBalance,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  await callPostToServer(event, '/api/txmonitor');
});
