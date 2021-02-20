// 백준 1722. 순열의 순서

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution (n, type, leftProps) {

  const fac = (n) => {
    let result = BigInt(1);

    if(n == 0) return BigInt(0);
  
    while(n > 1) {
      result *= BigInt(n);
      n--;
    }
  
    return result;
  }
  
  function case_1 (n, k) {
    let answer = [];
    let pool = new Array(n).fill(0).map((_, idx) => idx + 1);
    let idx = 0
  
    // 모든 조합 수
    let left_all_combi;
  
    while(pool.length > 0) {
      left_all_combi = fac(BigInt(pool.length - 1))
      
      if(left_all_combi == 0) idx = 0
      else {
        idx = Math.floor(parseInt(k / left_all_combi));
        if(k % left_all_combi == 0)
          idx--;
      }
      
      answer.push(pool[idx]);
      
      pool.splice(idx, 1);

      k -= left_all_combi * BigInt(idx)
    }
  
    answer = answer.join(" ");
  
    console.log(answer);
  }
  
  function case_2 (arr) {
    let answer = 1n;
    let pool = [...arr];
    let i = 0;
  
    pool.sort((a, b) => parseInt(a - b));
    while(pool.length > 0) {
      const poolIdx = BigInt(pool.indexOf(arr[i++]));
  
      answer += fac(pool.length - 1) * poolIdx;
      pool.splice(parseInt(poolIdx), 1);
    }
  
    console.log(String(answer).replace("n", ""));
  }

  switch(type) {
    case 1:
      case_1(n, leftProps[0])
      break;
    case 2:
      case_2(leftProps)
      break;
  }
}

input = `20
2 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 1 2`.split("\n");

var n = parseInt(input[0]);
var complexProps = input[1].split(" ");
var type = parseInt(complexProps.shift());
var leftProps = complexProps.map(_ => BigInt(_));

solution(n, type, leftProps);