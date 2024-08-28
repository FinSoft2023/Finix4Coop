# finrepo24b

FinSoft monorepository template

## Repository structure

- 'src/' - contains the source code (workspace root), please refer to the [README.md](src/README.md) in the 'src/' directory for more information
- 'backemu/' - contains the backend emulator
- 'docs/' - contains the documentation
- 'build/' - contains the build artifacts
- 'presentations/' - contains the presentations and slides

## Requirements

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Docker](https://www.docker.com/) - Containerization platform
- [VS Code](https://code.visualstudio.com/) - Code editor
- [Nx Console](https://nx.dev/nx-console) - Nx Console provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Getting started

- For development purpose you could run services reside in 'backemu/' directory
- To run those services you need to have Docker installed
- Run the following command to start the services:

```bash
cd backemu
docker compose up
```

- To stop the services run the following command (in the same directory 'backemu/'):

```bash
docker compose down
```

# ทำความเข้าใจการทำงานขอเครื่องมือ

## ไฟล์ module

- list หน้าแสดง list รายการ
- create หน้าสร้างข้อมูลของ list
- each หน้าประกอบข้อมูลของ list

### List จะประกอบไปด้วย

1. ชื่อหน้า
2. role เอาไว้ใช้ Template ที่เตรียมไว้มาใช้ (จะใส่ role หรือไม่ใส่ ก็ได้)

### Create จะประกอบไปด้วย

1. ชื่อหน้า
2. entity เอาไว้เชื่อมโยงกับ dataspace ที่ใช้ชื่อเดียวกัน
3. post ? ที่เห็นมา ใส่เป็น true
4. role เอาไว้ใช้ Template ที่เตรียมไว้มาใช้ (จะใส่ role หรือไม่ใส่ ก็ได้)

### Each จะประกอบไปด้วย

1. ชื่อหน้า
2. entity เอาไว้เชื่อมโยงกับ dataspace ที่ใช้ชื่อเดียวกัน
3. post ? ที่เห็นมา ใส่เป็น true
4. role เอาไว้ใช้ Template ที่เตรียมไว้มาใช้ (จะใส่ role หรือไม่ใส่ ก็ได้)
5. subName เอาไว้เรียกใช้ sub จากไฟล์ dataspace (จะมีหรือไม่มีก็ได้)

## Dataspace ไฟล์ที่ module เรียกใช้ input เพื่อเอาไปแสดงใน module

1. root ที่จะมี input เอาไว้แสดงในหน้าของ create
2. sub มีไว้ให้ส่วนของ each เรียกใช้ตามชื่อ sub
3. comnents มีการระบุบ comnents ที่ต้องการใช้ไว้ได้เลย
4. choices คือการที่สร้างชุดข้อมูลไว้ให้ comnents เรียกใช้ชุดข้อมูลของ choices อีกที

## เพิ่มเติม

### Steper

1. เริ่มจาก กำหนด module ที่เราต้องการ โดยการกำหนดที่ create ให้ใส่ หน้า steps และ กำหนด role ให้เป็น steps
2. ใส่ หน้า confirm กำหนด role ให้เป็น stepconfirm สำหรับเป็นหน้าขั้นตอนสุดท้าย ของ step ใน module
3. ค้นหา ไฟล์ steps.get.ts ที่อยู่ใน module ที่เราต้องการจะกำหนด step
4. ในหน้า teps.get.ts จะมี id , label , description ให้เรากำหนด
5. ถ้าอยากให้ ขั้นตอน step กดไปแล้วหน้าที่ไหน ให้ใส่ชื่อหน้าไว้ใน id
6. ถ้าอยากให้หน้าที่เราต้องการอยู่ที่ ขั้นตอนไหนให้เรียงลำดับจากบนลงล่าง และ ใส่ ตัวเลขกำกับ ใน label
7. ถ้าต้องการเปลี่ยนชื่อหัวข้อ step แก้ไขได้ที่ description และ เปลี่ยนเป็นข้อความที่เราต้องการได้

### Tabs

1. เข้าไปใน page ของ module ที่ต้องการเพิ่ม tabs
2. เลื่อนลงมาใน script จะเห็นตัว useSmartTabs
3. แก้ไข label: ที่จะเป็นชื่อของ tabs (หน้า List ที่ทำไว้ใน module)
4. แก้ไข to: ที่จะลิ้งค์ไปหน้า tabs นั้น ๆ (หน้า List ที่ทำไว้ใน module)

## วิธีการใช้งาน โครงสร้าง

1. คิด flow หรือ การทำงานของ โปรแกรมก่อนว่าต้องมีหน้าอะไรบ้าง (สำคัญที่สุด คิดไม่รอบคอบจะทำให้เสียเวลา)
2. หาประเด็น template list create each sub
3. สร้าง module ที่ต้องการในเรื่องนั้น ๆ โดยกำหนด หน้าต่าง ๆ list create each sub
4. กำหนด dataspace ว่าข้อมูล หรือ ช่องกรอกข้อมูล ใน หน้าต่างๆมีอะไรบ้าง ใช้ template ตัวไหน component อะไร
5. gen module ตามที่เรากำหนดเรียบร้อยแล้ว
6. เก็บรายละเอียด หน้าต่าง ๆ ที่ gen ออกมา ให้เป็นในแบบที่ต้องการ



## ขั้นตอนการเตรียม Git Branch ก่อนใช้งาน

| Clone   |      Fetch      |  
|----------|--------------|
| 1. สร้าง issues |  1. สร้าง issues | 
| 2. สร้าง Branch |  2. สร้าง Branch   |  
| 3. Clone repo ลงในเครื่อง | 3. เปิด Code /ยอมรับบ Trusted / รับGit |   
| 4. เปิด Code /ยอมรับบ Trusted / รับGit | 4. Fetch หา Branch |   
| 5. สลับ Branch ที่ต้องทำงาน | 5. สลับ Branch ที่ต้องทำงาน |   
| 6. เข้า src pnpm i | 6. เข้า src pnpm i |   
| 7. พร้อมทำงาน  | 7. พร้อมทำงาน |   


## วิธีการสร้าง Modules
1. create module
2. add dataspace
3. staged Module and dataspace
4. generate / pnpm i / pnpm dev
5. discard all
6. commit modules

## วิธีการ Generate module
1. discard All
2. generate modale
3. commit

## วิธีการ  แก้ไข Module และ Destaspace
1. close cmd 
2. edit module and dataspace
3. stage module and dataspace
4. generate / pnpm i / pnpm dev

## เพิ่มเติมจากการสร้าง Modules
1. ทุกครั้งที่ต้อง run ใหม่ต้อง close cmd กับ discard all
2. code ที่คิดว่าใช้ได้จะเอาใส่ staged ไว้

# หาประเด็นที่ง่ายต่อการทำโครงสร้างครั้งต่อไป

1. เอกสาร export เป็น PDF excel
2. template สำหรับ ปิดยอด หรือส่งเรื่องให้ฝ่ายงานอื่น (ที่ตอนนี้ยังทำมืออยู่ และไม่ต่างจากหน้า List เท่าไหร่)
3. template เมนู ที่ใช้กับฝ่ายการเงิน (ตอนนี้ทำมืออยู่)
4. แสดงวันที่ปัจจุบันในเอกสาร Print หรือ export
5. ให้ตัว tabs เปลี่ยนสถานะเอง
6. เพิ่ม template อื่น ๆุ

# ข้อคิดเพิ่มเติม
1. ใส่ใจรายละเอียดเล็กๆน้อยๆเป็นเรื่องสำคัญ
2. ทุกครั้งที่คิดงานใหม่อย่าลืมกลับไปดูงานเก่า
3. บางครั้งเริ่มทำจาก ของเดิมที่มีอยู่อาจจะทำให้ทำงานเร็วกว่า คิดใหม่
4. การเคระห์แยกเรื่องเป็นเรื่องๆ จะช่วยให้ทำงานง่ายขึ้น
5. ลองคิดในแนวของของมุมตรงกันข้าม กับแนวคิดเดิมของเรา