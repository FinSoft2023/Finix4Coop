<template>

  <BOnPageNotification v-if="state === 'completed'"
    id="next1"
    label="ทำรายการเสร็จเรียบร้อยเเล้ว"
    description="ท่านสามารถกดที่ปุ่ม 'ทำรายการถัดไป' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="ทำรายการถัดไป" 
    @action="navigateTo(`/queues`)" />
  <BOnPageNotification v-else-if="state === 'finance'"
    id="next2"
    label="กรุณาปริ้นเช็ค"
    description="ท่านสามารถกดที่ปุ่ม 'ปริ้นเช็ค' ได้และทำรายการต่อในขั้นตอนถัดไป."
    actionText="ปริ้นเช็ค" 
    @action="navigateTo(`/cheques/${route.params.id}/print`)" />
  <BOnPageNotification v-else-if="state === 'active'"
    id="next3"
    label="กรุณาบันทึกเช็ค"
    description="หลักจากที่ใบเช็คผ่านการอนุมัติเรียบร้อยแล้ว ท่านสามารถกดที่ปุ่ม 'สั่งจ่ายเช็ค' ที่อนุมัติแล้ว เพื่อบันทึกกลับเข้าสู่ระบบ."
    actionText="สั่งจ่ายเช็ค" 
    @action="navigateTo(`/cheques/${route.params.id}/scan`)" />
  <BOnPageNotification v-else-if="state === 'deliver'"
    id="next4"
    label="บันทึกขั่วเช็ค"
    description="หลังจากที่สมาชิกได้รับเช็คและเซ็นเช็คเรียบร้อยแล้ว ท่านสามารถกดที่ปุ่ม 'จ่ายเช็ค' เพื่อเก็บหลักฐานเข้าสู่ระบบ และ ดำเนินรายการถัดไปได้."
    actionText="จ่ายเช็ค" 
    @action="navigateTo(`/cheques/${route.params.id}/scan2deliver`)" />
  <BOnPageNotification v-else-if="state === 'account'"
    id="next5"
    label="กรุณาตรวจสอบข้อมูลก่อน ปิดยอด"
    description="หลังจากที่ท่านได้ตรวจสอบข้อมูลถูกต้องแล้ว สามารถกดที่ปุ่ม 'ปิดยอด' ได้หากต้องการทำรายการคำขอถัดไป."
    actionText="ปิดยอด" 
    @action="navigateTo(`/accounting`)" />
  <BOnPageNotification v-else
    id="next"
    label="ข้อมูลรายการคำขอได้เข้าสู่ระบบแล้ว"
    description="หากท่านต้องการปริ้นเอกสารใบถอน ท่านสามารถกดที่ปุ่ม 'ปริ้นใบถอน' เพื่อดำเนินการต่อไป."
    actionText="ปริ้นใบถอน"
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
