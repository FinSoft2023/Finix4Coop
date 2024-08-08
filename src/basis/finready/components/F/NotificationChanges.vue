<template>

  <BOnPageNotification v-if="state === 'completed'"
    id="next1"
    label="บันทึกใบถอนเรียบร้อยเเล้ว"
    description="สามารถกดที่ปุ่ม 'ทำรายการถัดไป' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="ทำรายการถัดไป" />
  <BOnPageNotification v-else-if="state === 'finance'"
    id="next2"
    label="ปริ้นเช็ค"
    description="สามารถกดที่ปุ่ม 'ปริ้นเช็ค' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="ปริ้นเช็ค" />
  <BOnPageNotification v-else-if="state === 'active'"
    id="next3"
    label="บันทึกเช็ค"
    description="สามารถกดที่ปุ่ม 'บันทึกเช็ค' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="บันทึกเช็ค" />
  <BOnPageNotification v-else-if="state === 'deliver'"
    id="next4"
    label="บันทึกขั่วเช็ค"
    description="สามารถกดที่ปุ่ม 'บันทึกขั่วเช็ค' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="บันทึกขั่วเช็ค" />
  <BOnPageNotification v-else-if="state === 'account'"
    id="next5"
    label="ปิดยอด"
    description="สามารถกดที่ปุ่ม 'ปิดยอด' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="ปิดยอด" />
  <BOnPageNotification v-else
    id="next"
    label="ข้อมูลคำขอได้เข้าสู่ระบบแล้ว"
    description="สามารถกดที่ปุ่ม 'ปริ้นใบถอน' ได้หากต้องการปริ้นใบคำขอถอน."
    actionText="ปริ้นใบถอน" />
{{ state }}
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

const state = computed(() => data.value?.state);




useBreadcrumb(pageDef.label);

</script>
