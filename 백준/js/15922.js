// 백준 15922. 아우으 우아으이야!! 출처

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
/* ============================================================== */

function solution(N, arr) {
  let answer = 0;

  let stack = [arr[0]];

  for(var i=1 ; i < arr.length ; i++) {

    const [s, e] = arr[i];
    const stackIdx = stack.length - 1
    const [_, stackEnd] = stack[stackIdx];

    if(s > stackEnd) {
      stack.push([s, e]);
    } else {
      stack[stackIdx][1] = Math.max(stackEnd, e);
    }
  }

  stack.forEach(([s, e]) => {
    answer += Math.abs(e - s)
  })

  console.log(answer);
}

var input = `2
-1000000000 1000000000
-1 1`.split("\n")

const N = Number(input[0]);

const arr = input.slice(1, input.length).map(_ => _.split(" ").map(str => Number(str)));

solution(N, arr);