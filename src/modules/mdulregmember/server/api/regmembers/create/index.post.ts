export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { amount, memcode } = body;

  console.log('deposit', amount, memcode);

  const existingMember = await $fetch<any[]>(`http://localhost:3086/api/regmembers`, {
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
  const result = await $fetch(
    `http://localhost:3086/api/regmembers/${member.id}`,
    {
      method: 'PUT',
      body: {
        balance: newBalance,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  await callPostToServer(event, '/api/txmonitor');
});
