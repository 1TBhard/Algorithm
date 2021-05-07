// 백준 1987. 알파벳 

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
/* ============================================================== */

function solution(MAP) {
  let answer = 1;
  const hash = {}

  for(var i='A'.charCodeAt(0) ; i <= 'Z'.charCodeAt(0) ; i++ ) {
    let ch = String.fromCharCode(i)
    hash[ch] = 0;
  }

  const canGo = (h, w) => {
    if(h < 0 || h >= MAP.length) return false;
    if(w < 0  || w >= MAP[0].length) return false;
    if(hash[MAP[h][w]] >= 1) return false;

    return true;

  }
  const recursive = (h, w, str) => {
    answer = Math.max(str.length, answer);

    let canGoUp = canGo(h-1, w);
    let canGoDown = canGo(h+1, w);
    let cabGoleft = canGo(h, w-1);
    let canGoRight  = canGo(h, w+1);

    if(canGoUp) {
      hash[MAP[h-1][w]]++
      recursive(h-1, w, str + MAP[h-1][w]);
      hash[MAP[h-1][w]]--
    }
    
    if(canGoDown) {
      hash[MAP[h+1][w]]++
      recursive(h+1, w, str + MAP[h+1][w]);
      hash[MAP[h+1][w]]--
    }
    if(cabGoleft) {
      hash[MAP[h][w-1]]++
      recursive(h, w-1, str + MAP[h][w-1]);
      hash[MAP[h][w-1]]--
    }
    if(canGoRight) {
      hash[MAP[h][w+1]]++
      recursive(h, w+1, str + MAP[h][w+1]);
      hash[MAP[h][w+1]]--
    }
  }

  hash[MAP[0][0]] = 1;
  recursive(0, 0, MAP[0][0]);

  console.log(answer);
}

input = `2 4
ABCDEFGHIZKLMNOPQRSTU
ABCDEFGHIZKLMNOPQRSTU`.split("\n");


input.splice(0, 1);

const MAP = [];

input.forEach(oneRow => {
  MAP.push([...oneRow.split("")])
});

solution(MAP);