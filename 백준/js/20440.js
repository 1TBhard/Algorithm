// 백준 20440.  🎵니가 싫어 싫어 너무 싫어 싫어 오지 마 내게 찝쩍대지마🎵 - 1

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */


function solution(arr) {

  arr.sort((a, b) => {
    if(a[0] === b[0]) return a[1] - b[1]
    else return a[0] - b[0]
  });

  const newArr = arr[0];

  let maxMosqito = 1;
  let 

  for(var i=1 ; i < arr.length  ; i++) {
    const [start, end] = arr[i];
    const lastEnd = newArr[newArr.length-1][1];

    if(start === lastEnd) {
      newArr[newArr.length - 1][1] = end
    } else {
      newArr.push([start, end]);
    }
  }
}