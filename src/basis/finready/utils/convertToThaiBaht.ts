// utils/convertToThaiBaht.ts
export function convertToThaiBaht(amount: number): string {
  const units = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];
  const digits = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
  
  if (amount === 0) return "ศูนย์บาท";
  
  let result = "";
  let unitIndex = 0;
  
  while (amount > 0) {
    let segment = amount % 10000;
    if (segment > 0) {
      let segmentStr = "";
      let tempSegment = segment;
      let digitIndex = 0;
      
      while (tempSegment > 0) {
        let digit = tempSegment % 10;
        if (digit > 0) {
          segmentStr = digits[digit] + units[digitIndex] + segmentStr;
        } else if (digitIndex > 0 && segmentStr.length > 0) {
          segmentStr = digits[0] + segmentStr;
        }
        tempSegment = Math.floor(tempSegment / 10);
        digitIndex++;
      }
      
      if (unitIndex > 0) {
        segmentStr += units[unitIndex];
      }
      
      result = segmentStr + result;
    }
    
    amount = Math.floor(amount / 10000);
    unitIndex++;
  }
  
  return result + "บาท";
}
