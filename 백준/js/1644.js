// 백준 1644. 소수의 연속합

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(n) {
  let era = new Array(4000001).fill(true);

  era[0] = false;
  era[1] = false;
  for(var i=2 ; i < 2000 ; i++) {
    for(var j=2 ; i * j < era.length ; j++)
      era[i * j] = false
  }

  let arr = [];
  let answer = 0;

  let sum = 0;

  for(var i=2 ; i <= n ; i++) {
    if(era[i] === true) {
      while(sum + i > n) sum -= arr.shift();
      sum += i;
      arr.push(i);
      if(sum === n) answer++;
    }
  }

  console.log(answer);
}

solution(4000000);