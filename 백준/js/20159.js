// 백준 20159. 동작 그만. 밑장 빼기냐?

// /* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// /* ============================================================== */

function solution(arr) {
  let sum  = [0];
  let bSum = [0];

  for(var i=0 ; i < arr.length ; i += 2) {
    sum.push(sum[sum.length - 1] + arr[i]);
    bSum.push(bSum[bSum.length - 1] + arr[i + 1]);
  }

  let answer = sum[sum.length -1];

  // i 턴에 밑장빼기
  for(var i=1 ; i <sum.length ; i++) {
    // 밑장 뺀걸 내가 갖기
    // arr 에서 마지막 카드가 내 마지막 카드
    answer = Math.max(answer, sum[i-1] + (bSum[bSum.length - 1] - bSum[i-1]))
    answer = Math.max(answer, sum[i] + bSum[bSum.length - 1] - bSum[i - 1] - arr[arr.length - 1])
  }

  
  console.log(answer)
}

input = `2
3 2 5 7 3 1`.split("\n");

var arr = input[1].split(' ').map(num => parseInt(num))

solution(arr)