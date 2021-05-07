// 백준 1405. 미친 로봇

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution(N, w, s, n ,e) {
  const MAP = Array(30).map(_ => new Array(30).fill(false));

  const isDuplicate = (currentRound, y, x) => {
    return MAP[y][x] === currentRound + 1; 
  }

  let answer = 0;

  const recursive = (round, y, x) => {
    MAP[y][x] = true

    if(!isDuplicate(round, y+1, x)) {
      recursive(round, y+1, x);
      answer += s
    }
    if(!isDuplicate(round, y-1, x)) {
      recursive(round, y-1, x);
    } 
    if(!isDuplicate(round, y, x+1)) {
      recursive(round, y, x+1);
    }
    if(!isDuplicate(round, y, x-1)) {
      recursive(round, y, x-1);
    }

    MAP[y][x] = false
  }

  recursive()


}