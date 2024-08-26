// 工具类
import { XING } from "./static.js";


// 获取随机字符串
export function randomString(n = 10) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < n; i++) result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
}

// 随机姓
export function randomXing() {
 return XING[Math.floor(Math.random() * XING.length)]; 
}
