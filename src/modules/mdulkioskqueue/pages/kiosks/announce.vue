<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="flex justify-center">
     
          </div>
          <UCard class="mt-3 max-w-md mx-auto">
            <div class="text-center mt-8">
              <h1 class="mb-4 text-center text-xl tracking-tight lg:text-2xl text-gray-900 dark:text-white">
                หมายเลขคิว
              </h1>
              <h1 class="mb-8 text-5xl tracking-tight font-extrabold lg:text-6xl text-primary-600 dark:text-primary-500">
                {{ queueNumber }}
              </h1>
            
            </div>
          </UCard>
          <div class="flex justify-center mt-6">
            <button
              @click="goToNextQueue"
              class="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              เรียกคิว
            </button>
          </div>
    
        </div>
      </section>      
    </BPartPageBody>

    <!-- <template #side>
      <DSubLinks />
    </template> -->
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
const queueNumber = ref('A-001');
const previousQueueCount = ref(4);
let voices = [] as SpeechSynthesisVoice[];

// ดึงเสียงที่รองรับเมื่อโหลดหน้า
onMounted(() => {
  voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) {
    // โหลดเสียงใหม่หากยังไม่ได้โหลด
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
    };
  }
});

// ฟังก์ชันพูดข้อความด้วยเสียง "Siri" หรือเสียงใกล้เคียง
const speakText = (text: string) => {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.lang = 'th-TH';  // กำหนดภาษาของเสียงเป็นภาษาไทย
  utterance.rate = 0.6;      // ความเร็วในการอ่าน
  utterance.pitch = 1.5;     // โทนเสียงสูง

  // ตรวจสอบว่าเสียงพร้อมหรือยัง
  let voices = window.speechSynthesis.getVoices();
  
  if (voices.length === 0) {
    // หากเสียงยังไม่ถูกโหลด ให้รอจนกว่าเสียงจะถูกโหลด
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
      setVoice(voices, utterance);
    };
  } else {
    // ตั้งค่าเสียงทันที
    setVoice(voices, utterance);
  }

  window.speechSynthesis.speak(utterance);
};

const setVoice = (voices: SpeechSynthesisVoice[], utterance: SpeechSynthesisUtterance) => {
  // เลือกเสียงที่มีชื่อว่า 'Siri' หรือเสียงที่คล้าย Siri
  const selectedVoice = voices.find(voice => voice.name === 'Siri');
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  } else {
    // หากไม่พบเสียง 'Siri' ให้เลือกเสียงที่รองรับภาษาไทย
    const fallbackVoice = voices.find(voice => voice.lang === 'th-TH');
    if (fallbackVoice) {
      utterance.voice = fallbackVoice;
    } else {
      console.warn('ไม่พบเสียง Siri หรือเสียงภาษาไทยที่รองรับ');
      utterance.voice = voices[0];  // หากไม่มีเสียงที่ต้องการ ให้เลือกเสียงแรกที่พบ
    }
  }
};

// ฟังก์ชันเปลี่ยนหมายเลขคิวเป็นคิวถัดไป
const goToNextQueue = () => {
  const currentNumber = parseInt(queueNumber.value.split('-')[1]);
  const nextNumber = currentNumber + 1;
  queueNumber.value = `G-${nextNumber.toString().padStart(3, '0')}`;

  // ลดจำนวนคิวก่อนหน้า
  if (previousQueueCount.value > 0) {
    previousQueueCount.value -= 1;
  }

  // พูดหมายเลขใหม่
  speakText(`ขอเชิญหมายเลข  ${queueNumber.value}`);
};

</script>

