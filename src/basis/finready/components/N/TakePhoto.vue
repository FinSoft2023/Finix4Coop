  <template>
    <h4 class="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
      สแกนเอกสาร
    </h4>

    <div class="mt-5 border rounded-lg p-5 dark:bg-gray-800 dark:border-gray-700">
      <img class=""
          v-if="imageUrl"
          :src="imageUrl"
          style="width: 100%; height: auto">
    </div>
    
    <div class="mt-4">
      <UButton>ถ่ายรูป</UButton>     
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        imageUrl: null,
      }
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }
  </script>
