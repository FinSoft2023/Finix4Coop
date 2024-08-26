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

## วิธีการใช้งาน โครงสร้าง

1. คิด flow หรือ การทำงานของ โปรแกรมก่อนว่าต้องมีหน้าอะไรบ้าง (สำคัญที่สุด คิดไม่รอบคอบจะทำให้เสียเวลา)
2. หาประเด็น template list create each sub
3. สร้าง module ที่ต้องการในเรื่องนั้น ๆ โดยกำหนด หน้าต่าง ๆ list create each sub
4. กำหนด dataspace ว่าข้อมูล หรือ ช่องกรอกข้อมูล ใน หน้าต่างๆมีอะไรบ้าง ใช้ template ตัวไหน component อะไร
5. gen module ตามที่เรากำหนดเรียบร้อยแล้ว
6. เก็บรายละเอียด หน้าต่างๆที่ gen ออกมา ให้เป็นในแบบที่ต้องการ
