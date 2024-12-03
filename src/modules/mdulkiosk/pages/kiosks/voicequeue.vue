<template>
  <div class="container">
    <h1 class="title">ระบบเรียกบัตรคิว</h1>

    <div class="buttons">
      <!-- ปุ่มเพิ่มหมายเลขคิว A-J -->
      <button v-for="letter in 'ABCDEFGHIJ'" :key="letter" class="call-button" @click="playNextQueue(letter)">
        เพิ่มคิว {{ letter }}
      </button>
    </div>

    <audio controls>
      <source src="/audio/welcome.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
   
    <div v-if="currentCardNumber" class="card-display">
      <h2>หมายเลขบัตรที่กำลังเรียก:</h2>
      <div class="card-number">{{ currentCardNumber }}</div>
      <button class="recall-button" @click="recallCurrentQueue">เรียกซ้ำ</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queueNumbers: {
        A: 1,
        B: 1,
        C: 1,
        D: 1,
        E: 1,
        F: 1,
        G: 1,
        H: 1,
        I: 1,
        J: 1
      },
      currentCardNumber: "", // หมายเลขบัตรปัจจุบันที่กำลังเรียก
      currentQueueType: ""  // ตัวอักษรประเภทคิวที่กำลังเรียก (A-J)
    };
  },
  methods: {
    async playNextQueue(queueType) {
      if (this.queueNumbers[queueType] > 999) {
        alert(`ถึง ${queueType}999 แล้ว`); // แจ้งเตือนเมื่อถึงหมายเลขสุดท้ายของประเภทคิว
        return;
      }

      // บันทึกประเภทคิวปัจจุบัน
      this.currentQueueType = queueType;

      // สร้างหมายเลขบัตรใหม่
      const numberStr = this.queueNumbers[queueType].toString().padStart(3, "0"); // เช่น 1 -> '001'
      this.currentCardNumber = `${queueType}${numberStr}`; // กำหนดหมายเลขบัตรที่จะแสดง

      // เพิ่มหมายเลขสำหรับการเรียกครั้งถัดไป
      this.queueNumbers[queueType]++;

      // เล่นเสียงเรียกหมายเลข
      await this.playQueueAudio(queueType, numberStr);
    },
    async recallCurrentQueue() {
      if (!this.currentCardNumber || !this.currentQueueType) {
        alert("ไม่มีหมายเลขให้เรียกซ้ำ!");
        return;
      }

      // เรียกเสียงหมายเลขปัจจุบันซ้ำ
      const numberStr = this.currentCardNumber.slice(1); // แยกตัวเลขออกจากหมายเลขบัตร (A001 -> 001)
      await this.playQueueAudio(this.currentQueueType, numberStr);
    },
    async playQueueAudio(queueType, numberStr) {
      try {
        // เล่นเสียงคำว่า "เชิญหมายเลข"
        await this.playAudio("/audio/welcome.mp3");

        // เล่นเสียงตัวอักษร (A-J)
        await this.playAudio(`/audio/${queueType}.mp3`);

        // เล่นเสียงตัวเลข เช่น '001'
        for (const digit of numberStr) {
          await this.playAudio(`/audio/${digit}.mp3`);
        }

        // เล่นเสียงคำว่า "เข้ารับบริการ"
        await this.playAudio("/audio/เข้ารับบริการ.mp3");

        // เล่นเสียงหมายเลขลำดับ (1-10 ตามปุ่มที่กด)
        const keys = Object.keys(this.queueNumbers);
        const index = keys.indexOf(queueType) + 1;
        await this.playAudio(`/audio/${index}.mp3`);

        // เล่นเสียงคำว่า "ค่ะ"
        await this.playAudio("/audio/ค่ะ.mp3");
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    },
    playAudio(src) {
      return new Promise((resolve, reject) => {
        const audio = new Audio(src);
        audio.playbackRate = 1; // ตั้งความเร็วเสียง
        audio.play();
        audio.onended = resolve;
        audio.onerror = reject;
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 20px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.call-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.call-button:hover {
  background-color: #0056b3;
}

.card-display {
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
}

.card-display h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333;
}

.card-number {
  font-size: 2rem;
  font-weight: bold;
  color: #007BFF;
  border: 2px solid #007BFF;
  padding: 10px;
  border-radius: 5px;
}

.recall-button {
  margin-top: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.recall-button:hover {
  background-color: #218838;
}
</style>
