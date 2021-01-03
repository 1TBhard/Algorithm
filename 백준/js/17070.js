// 백준 17070. 파이프 옮기기 1 

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution(n, map) {
  let answer = 0;

  const canGo = (nextY, nextX) => {
    if(nextY < 0 || nextY >= n) return false;
    if(nextX < 0 || nextX >= n) return false;
    if(map[nextY][nextX] === 1) return false;

    return true;
  }

  const HORIZE = "horize";
  const VIRTICAL = "virtical";
  const ROTATE = "rotate";

  // 현재 y, 현재 x, 현재 방향, 스탭
  const recursive = (y, x, status, step) => {
    if(y === n-1 && x === n-1) {
      answer++;
      return;
    }

    const goDown = status !== HORIZE && canGo(y+1, x);
    const goRight = status !== VIRTICAL && canGo(y, x+1);

    // 회전하려면 아래 좌측이 비어야함
    const goRotate = canGo(y+1, x+1) && canGo(y+1, x) && canGo(y, x+1);

    if(goDown) recursive(y+1, x, VIRTICAL, step+1);
    if(goRight) recursive(y, x+1, HORIZE, step+1);
    if(goRotate) recursive(y+1, x+1, ROTATE,step+1);
  }

  recursive(0, 1, HORIZE, 0);

  console.log(answer);
}

const N = input[0];
input.splice(0, 1);

const map = input.map(row => row.split(" ").map(_ => parseInt(_)));

solution(N, map)