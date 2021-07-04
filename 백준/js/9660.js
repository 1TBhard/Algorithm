// 백준 9960. 돌 게임 6
// 규칙을 찾는 문제

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim()
/* ============================================================== */

// true : 상근이 이김
// false : 창영이 이김
// function solution(N) {
//   const arr = new Array(N+1)
//   arr[1] = true
//   arr[2] = false
//   arr[3] = true
//   arr[4] = true

//   for(var i=5 ; i < N+1 ;i++) {
//     arr[i] = (!arr[i-1] || !arr[i-3] || !arr[i-4]);
//   }

//   for(var i=1 ; i < N+1 ; i++)
//     console.log(i, arr[i] ? "SK" : "CY")
// }

function solution(N) {
  if(N % 7 === 0 || N % 7 === 2) console.log("CY") 
  else console.log("SK")
}


// var input = `100`

solution(Number(input));