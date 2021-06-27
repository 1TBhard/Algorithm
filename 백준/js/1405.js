// 백준 1405. 미친 로봇

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(N, e, w, s, n) {
  const MAP = Array.from(Array(31), _ => new Array(29).fill(false))

  let answer = 0;

  const recursive = (round, y, x, percent) => {
    if(MAP[y][x] === true || round > N) {
      return;
    }

    if(round === N) {
      answer += percent;
      return;
    }


    MAP[y][x] = true;
    recursive(round + 1, y+1, x, percent * s / 100);
    recursive(round + 1, y-1, x, percent * n / 100);
    recursive(round + 1, y, x+1, percent * e / 100);
    recursive(round + 1, y, x-1, percent * w / 100);
    MAP[y][x] = false;
  }

  recursive(0, 15, 15, 1);

  console.log(answer.toPrecision(9))
}

var [N, e, w, s, n] = input.split(" ").map(_ => parseInt(_));

solution(N, e, w, s, n);