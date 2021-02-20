// 백준 9084. 동전

/*

arr[i] = arr[i] + arr[i-coin]

*/

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
/* ============================================================== */

function solution(coins, m) {
  let arr = Array(m+1).fill(0);
  
  arr[0] = 1;

  coins.forEach(coin => {
    arr[coin]++;
    for(var i=1 ; i <= m ; i++) {
      if(i - coin >= 1) arr[i] += arr[i - coin];
    }
  });

  console.log(arr[m])
}

// const input = "1\n2\n1 2\n1000".split("\n");
const howGo = parseInt(input.shift());


for(var i=0 ; i < howGo ; i++) {
  input.shift();
  const COINS = input.shift().split(" ").map(_ => parseInt(_));
  const M = parseInt(input.shift());
  solution(COINS, M);
}


