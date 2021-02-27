// 백준 1174. 줄어드는 숫자

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

const list = [9,8,7,6,5,4,3,2,1,0];

const arr = []

function recursive(str, idx, limit) {
  if(str.length >= limit) {
    arr.push(str);
    return;
  }

  if(idx >= list.length) return;

  recursive(str+list[idx], idx+1, limit);
  recursive(str, idx+1, limit);
}

function solution(n) {
  if(n <= 10) {
    console.log(n-1);
  } else if(n >= 1024) {
    console.log(-1);
  } else {
    for(var limit=2 ; limit<=10 ; limit++) {
      recursive("", 0, limit)
    }

    arr.sort();

    console.log(arr[n])
  }
}

solution(input)
