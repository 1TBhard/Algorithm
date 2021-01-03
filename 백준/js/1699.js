// 백준 1699. 제곱수의 합

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(N) {
  let arr = new Array(N+1).fill(100000);

  for(var i=1 ; i <= N ; i++) {
    arr[i] = Math.min(arr[i], i);
    if(i * i <= N) arr[i * i] = 1;
  }

  for(var i=2 ; i < N+1 ; i++) {
    for(var j = 0 ; j*j < i ; j++) {
      // 숫자 i - j^2 보다 숫자 i 가 1(j^2)개 많음
      arr[i] = Math.min(arr[i], arr[i - j*j] + 1);
    }
  }

  console.log(arr[N]);
}

// input = parseInt(input);
solution(99999);
