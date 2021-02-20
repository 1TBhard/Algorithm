// 백준 1174. 줄어드는 숫자

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

var num = Array(1000).fill(0);
var t = 10;
var ans = []

const LIST = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function recursive(idx, str) {
  
  recursive(idx+1, str + LIST[idx])
  recursive(idx+1, str)
}

function solution(n) {
  if(n <= 10) {
    console.log(n-1);
  } else if (n > 1023) {
    console.log(-1);
  } else {
    recursive(0, 0)
  }
}

solution()

console.log(ans)