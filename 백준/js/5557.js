// 백준 5557. 1학년
/*
+ 될때의 값    - 될때 값
    \             /
        현재 값
*/


/*
JS 에서는 최대 테스트 케이스에서 671013170798012900 까지만 나옴
이에 BigInt() 해줘야함

*/

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
/* ============================================================== */

function solution(n, arr) {
  let temp = Array.from(Array(n - 1), _ => Array(21).fill(BigInt(0)));
  
  temp[0][arr[0]] = 1;

  for(var h=1 ; h < n - 1 ; h++) {
    const NUM = arr[h];

    for(var i=0 ; i < 21 ; i++) {
      if(temp[h-1][i] === 0) continue;
      if(i + NUM <= 20) temp[h][i + NUM] += BigInt(temp[h-1][i]);
      if(i - NUM >= 0) temp[h][i - NUM] += BigInt(temp[h-1][i]);
    }

  }

  // bigInt 표시인 n을 떼줌
  console.log(String(temp[n - 2][arr[arr.length - 1]]).replace("n", ""));
}

// const N = 11;
// const ARR = [8, 3, 2, 4, 8, 7, 2, 4, 0, 8, 8];

// 최대 케이스
const input = "100\n0 7 2 8 4 8 3 9 4 9 7 9 0 8 4 7 9 0 1 5 3 4 3 6 9 1 9 3 0 4 7 1 3 8 6 1 8 2 4 4 3 1 3 2 7 9 6 7 6 0 0 7 0 8 8 2 8 6 4 2 7 1 6 7 0 1 6 9 6 7 9 9 3 9 4 6 3 4 1 5 5 1 3 2 6 7 1 9 4 3 8 0 4 8 7 4 7 8 1 6".split("\n");

const N = parseInt(input[0]);
const ARR = (input[1]).split(" ").map(x => parseInt(x));

solution(N, ARR);
