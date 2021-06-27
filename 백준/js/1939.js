// 백준 1939. 중량제한

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution(N, g, MIN_COST, MAX_COST, target) {
  const [start, end] = target;

  let low = MIN_COST;
  let high = MAX_COST;

  const canGoFactory = (tryWeight) => {
    const visited = new Set();
    const stack = g[start].filter(([nextIsland, limitWeight]) => {
      if(!visited.has(nextIsland) && limitWeight >= tryWeight) {
        visited.add(nextIsland);
        return true;
      } else false;
    });

    while(stack.length > 0) {
      const [islandNum, limitWeight] = stack.splice(0, 1)[0];
      
      if(limitWeight >= tryWeight && islandNum === end) return true;

      const goToNext = g[islandNum].filter(([nextIsland, limitWeight]) => {
        if(!visited.has(nextIsland) && limitWeight >= tryWeight) {
          visited.add(nextIsland);
          return true;
        } else false;
      });
      stack.push(...goToNext);
    }

    return false;
  }

  while(low <= high) {
    const tryWeight = Math.floor((low + high) / 2);
    
    if(canGoFactory(tryWeight)) low = tryWeight+1;
    else high = tryWeight-1;
    }
  
    console.log(Math.floor((low + high) / 2))
}

var input = `9 9
1 4 11
1 5 2
4 5 4
4 3 10
4 2 7
5 2 10
5 6 13
3 2 9
2 6 8
1 6`.split("\n")

var [N, M] = input.splice(0, 1)[0].split(" ");

var g = {};

for(var i=1 ; i <= N ; i++) {
  g[i] = [];
}

let MAX_COST = 0
let MIN_COST = 1000000000

for(var i=0 ; i < input.length - 1 ; i++) {
  const [start, end, weight] = input[i].split(" ").map(_ => parseInt(_));
  MAX_COST = Math.max(MAX_COST, weight)
  MIN_COST = Math.min(MIN_COST, weight)

  g[start].push([end, weight]);
  g[end].push([start, weight]);
}

const target = input[input.length - 1].split(" ").map(_ => parseInt(_))


solution(N, g, MIN_COST, MAX_COST, target);