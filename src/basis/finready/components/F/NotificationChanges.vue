<template>

  <BOnPageNotification v-if="state === 'completed'"
    id="next1"
    label="ทำรายการเรียบร้อยเเล้ว"
    description="สามารถกดที่ปุ่ม 'ทำรายการถัดไป' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="ทำรายการถัดไป" 
    @action="navigateTo(`/queues`)" />
  <BOnPageNotification v-else-if="state === 'finance'"
    id="next2"
    label="ปริ้นเช็ค"
    description="สามารถกดที่ปุ่ม 'ปริ้นเช็ค' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="ปริ้นเช็ค" 
    @action="navigateTo(`/cheques/${route.params.id}/print`)" />
  <BOnPageNotification v-else-if="state === 'active'"
    id="next3"
    label="บันทึกเช็ค"
    description="สามารถกดที่ปุ่ม 'บันทึกเช็ค' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="บันทึกเช็ค" 
    @action="navigateTo(`/cheques/${route.params.id}/scan`)" />
  <BOnPageNotification v-else-if="state === 'deliver'"
    id="next4"
    label="บันทึกขั่วเช็ค"
    description="สามารถกดที่ปุ่ม 'บันทึกขั่วเช็ค' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="บันทึกขั่วเช็ค" 
    @action="navigateTo(`/cheques/${route.params.id}/scan2deliver`)" />
  <BOnPageNotification v-else-if="state === 'account'"
    id="next5"
    label="ปิดยอด"
    description="สามารถกดที่ปุ่ม 'ปิดยอด' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="ปิดยอด" 
    @action="navigateTo(`/accounting`)" />
  <BOnPageNotification v-else
    id="next"
    label="ท่านได้ขอกู้ฉุกเฉินเรียบร้อยแล้ว"
    description="ท่านเดินทางไปติดต่อเจ้าหน้าที่ที่สหกรณ์ได้ เพื่อดำเนินการต่อไป."
    actionText="เสร็จสิ้น"
    @action="navigateTo(`/withdrawals/${route.params.id}/print`)" />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

const state = computed(() => data.value?.state);


const route = useRoute();


useBreadcrumb(pageDef.label);

</script>
