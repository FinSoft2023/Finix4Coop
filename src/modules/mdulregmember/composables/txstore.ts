import { useStorage } from '@vueuse/core';

export const useTxStore = defineStore('active-tx-store', () => {
  const txdata = useStorage<any[]>('txdata', []);
  const members = useStorage<any[]>('members', []);

  const addMember = (member2: any) => {
    const member = { ...member2 };
    member.id = member.memcode;
    members.value.push(member);

    return member;
  };

  const addTx = (tx2: any) => {
    const tx = { ...tx2 };
    const member = getMember(tx.memcode);
    if (member)
      tx.name = member.name;
    txdata.value.push(tx);
  };

  const getMember = (id: string) => {
    const member = members.value.find((m: any) => m.id === id);
    return member;
  };

  return { txdata, members, addMember, getMember, addTx };
});