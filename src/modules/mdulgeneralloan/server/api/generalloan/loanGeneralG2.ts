export default defineEventHandler(async (event) => {
  return {
    fname: "มานะ",               //ชื่อข้าพเจ้า หรือผู้กู้
    lname: "เพียงใจ",                //นามสกุล เดียวกับคู่สมรส
    spouseFName: "ดีใจ",                 //ชื่อคู่สมรส   ถามพี่เขาว่าต้องใส่ชื่อคู่สมรสมั้ย
    jjName: "มานี",                     // ผู้ค้ำประกัน
    officerFName: "มัสวิสา",                //ชื่อเจ้าหน้าที่สหกรณ์
    officerLName: "สารวาน",               //นามสกุลเจ้าหน้าที่
    chaimanFName: "พาลี",               //ชื่อประธานกรรมการ
    chaimanLname: "บุญมา",               //นามสกุลปรระธาน
    directorFName: "ดาริกา",             //ชื่อกรรมการ
    directorLName: "กุลแก้ว",             //นามสกุลกรรมการผู้จัดการ
    paymentFname: "สุธี",                //ชื่อเจ้าหน้าที่จ่ายเงิน
    paymentLname: "บันดร",              //นามสกุล

    idLine: "mana88",                //ไอดีไลน์ 
    housenb: "506/1",                    //บ้านเลขที่
    group: 5,                        //หมู่
    road: "ถ.วิจตรนคร",                 //ถนน
    subdistrict: "ต.เมืองเหนือ",              //ตำบล
    district: "เมือง",                //อำเภอ
    province: "ศรีสะเกษ ",              //จังหวัด
    zipcode: "33000",                //รหัสไปรษณี
    phonenb: '0948739872',         //เบอร์โทร
    age: 34,                           //อายุ
    birthday: '02/05/2004',            //วันเกิด
    idcard: '1429900507767',           //เลขบัตรประชาชน
    position: "พยาบาลผู้ช่วย",                //ตำแหน่ง
    department: "ผู้ป่วยใน",            //แผนก
    affiliation: "โรงพยาบาลศรีสะเกษ",      // สังกัด
    agency: "โรงพยาบาลศรีสะเกษ",               // หน่วยงาน
    salary: 25000,                     //เงินเดือน

    stockvalue: 50,                   //เงินอัตราเดือนละ
    office: "หนี้บ้าน",      //สำนักงานเงินกู้
    debt: 500000,                        //เงินกู้
    interest: 'หนี้บัตรเครดิค',            //อัตราต่อปี
    guarantee: "ประกันรถยนต์",         //สิ่งที่ค้ำประกัน
    remain: 100,                      //เงินคงเหลือที่ติดหนี้
    accruedinterest: "ไม่มีดอกเบี้ย",       //ดอกเบี้ย
    reason: "กู้ยืมเงินเพื่อชำระหนี้สิน",   //เหตุผลการกู้
    mout: "มกราคม",                    //เดือนกู้
    co: "2568",                        //พศ.ปีกู้
    contract: "1",                     //สัญญา

    idaccount: '06547855551',          //เลขบัญชีธนาคาร
    bank: 'ธนาคารกรุงไทย',                     //ชื่อธนาคาร
    branchBank: 'เมืองเหนือ',                     //สาขาธนาคาร
    remberRegistration: '00001',      // เลขที่ทะเบียนสมาชิก
    remaining: 20000,              // เงินคงเหลือ
    makepayment: 900,            // ชำระเงินรายเดือน

    loanLetterNumber: "255/30",         //หนังสือที่
    loanAccountNumber: "655/1",         // บัญชีเลขที่
    receivedLocation: "สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ จำกัด", // สถานที่

    monthlyIncome: 10000,

    dateReceived: new Date().toISOString(), //วันที่ปัจจุบัน  full จะได้ผลลัพธ์ 1 เมษายน พศ.2567    short ผลลัพธ์  01/04/2567

    repaymentPlan: [
      { fn: "การุ ", ln: "นาปา ", age: 36, numberRegist: "1020", phoneNumber: '0929981234', poSition: 'พยาบาลผู้ช่วย', afiilia: 'โรงพยาบาลศรีสะเกษ', limit: 20000 },
      { fn: "ดาฮา", ln: "นาปา ", age: 38, numberRegist: "2012", phoneNumber: '0987688766', poSition: 'พยาบาลผู้ช่วย', afiilia: 'โรงพยาบาลศรีสะเกษ', limit: 20000 },
      //เอาไปใส่หน้าที่ 2 กับ 3
      // ชื่อนามสกุล                อายุ         เลขทะเบียน          เบอร์โทร                    ตำแหน่ง             สังกัด             วงเงินค้ำประกัน
    ],
  }
});