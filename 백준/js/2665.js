// 백준 2665. 미로만들기 

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution(N, MAP) {

  const visited = new Array(N).fill(0).map(_ => new Array(N * 2 + 1).fill(N * 2 + 1));
  visited[0][0] = 0;

  let answer = N * 2;
  const q = [[0, 0]];

  const canGo = (y, x) => {
    if(y < 0 || y >= N) return false;
    if(x < 0 || x >= N) return false;
    return true;
  }

  while(q.length > 0) {
    const [y, x] = q.splice(0, 1)[0];
    const changed = visited[y][x];

    if(y === N - 1 && x === N - 1) {
      answer = Math.min(answer, changed);
      continue
    }

    const nextPos = [[y+1, x], [y-1, x], [y, x+1], [y, x-1]];

    nextPos.forEach(([nextY, nextX]) => {

      if(!canGo(nextY, nextX) || changed >= visited[nextY][nextX]) return; 
      
      if(MAP[nextY][nextX] === '0') {
        const nextChanged = changed + 1
        q.push([nextY, nextX])
        visited[nextY][nextX] = nextChanged
      } else {
        q.push([nextY, nextX])
        visited[nextY][nextX] = changed
      }
    });
  }

  console.log(answer);
}

var N = parseInt(input[0]);
var MAP = input.splice(1, input.length - 1).map(str => str.split(""));

solution(N, MAP)