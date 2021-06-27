// 백준 14442. 벽 부수고 이동하기 2

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution(N, M, K, MAP) {
  const visted = Array.from(MAP, row => row.map(_ => new Array(K+1).fill(false)));
  visted[0][0][0] = 1;

  // 0 : 못지나감
  // 1 : 지나감
  // 2 : 벽뚤고 감
  const isCanGo = (y, x) => {
    if(y < 0 || y >= N) return 0;
    if(x < 0 || x >= M) return 0;

    return 1;
  }

  const q = [[0, 0, 1, 0]];

  const go = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while(q.length > 0) {
    const [y, x, round, k] = q.shift(0);

    if(y === N - 1 && x === M - 1) {
      console.log(round)
      return;
    }

    for(var i=0 ; i<4 ; i++) {
      const [y_change, x_change] = go[i];
      const [nextY, nextX] = [y + y_change, x + x_change];

      if(!isCanGo(nextY, nextX)) continue
      if(visted[nextY][nextX][k]) continue;
      if(MAP[nextY][nextX] == "1") {
        if(k < K) {
          visted[nextY][nextX][k] = true;
          q.push([nextY, nextX, round+1, k+1]);
        } 
      } else {
        visted[nextY][nextX][k] = true;
        q.push([nextY, nextX, round+1, k]);
      }
    }
  }

  console.log(-1);
  return;
}

const [N, M, K] = input[0].split(" ").map(_ => parseInt(_));
const MAP = input.slice(1, input.length).map(_ => _.split(""));

solution(N, M, K, MAP)