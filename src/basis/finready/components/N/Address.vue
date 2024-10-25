<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">ชื่อผู้ใช้:</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>

    <div>
      <label for="address">ที่อยู่:</label>
      <input type="text" id="address" v-model="form.address" required />
    </div>

    <div>
      <label for="city">เมือง:</label>
      <input type="text" id="city" v-model="form.city" required />
    </div>

    <div>
      <label for="postalCode">รหัสไปรษณีย์:</label>
      <input type="text" id="postalCode" v-model="form.postalCode" required />
    </div>

    <div>
      <label for="country">ประเทศ:</label>
      <select id="country" v-model="form.country" required>
        <option value="TH">ประเทศไทย</option>
        <option value="US">สหรัฐอเมริกา</option>
        <option value="UK">สหราชอาณาจักร</option>
        <!-- เพิ่มประเทศอื่น ๆ ตามต้องการ -->
      </select>
    </div>

    <button type="submit">ส่งข้อมูล</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// ข้อมูลฟอร์ม
const form = ref({
  name: '',
  address: '',
  city: '',
  postalCode: '',
  country: 'TH', // ค่าเริ่มต้นเป็นประเทศไทย
});

// ฟังก์ชันสำหรับส่งข้อมูลฟอร์ม
const submitForm = () => {
  console.log('ข้อมูลที่กรอก:', form.value);
  alert('ข้อมูลถูกส่งแล้ว!');
};
</script>

<style scoped> 
/* สไตล์เฉพาะสำหรับ component นี้ */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2c8e65;
}
</style>
