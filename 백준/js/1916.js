// 백준 1916. 최소비용 구하기

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */


function solution(N, M, graph, start, end) {
  const MAX_CITY = 1000
  const q = [...graph[start]];
  const visited = new Array(MAX_CITY + 1).fill(-1);

  let head = 0

  while(q.length > head) {
    
    const [e, curCost] = q[head++];

    if(!(e in graph)) {
      if(visited[e] === -1) visited[e] = curCost
      else visited[e] = Math.min(visited[e], curCost)
      continue
    }

    const nextList = graph[e].reduce((acc, [nextPos, cost]) => {
      const nextCost = curCost + cost
      if(visited[nextPos] === -1 || visited[nextPos] > nextCost ) {
        visited[nextPos] = nextCost
        return [...acc, [nextPos, nextCost]]
      } else return acc
    }, []);

    q.push(...nextList)
  }

  return console.log(visited[end])
}

var input = `4
2
1 3 10
2 3 10
1 3`.split("\n")

var N = Number(input[0])
var M = Number(input[1])

var costInfo = input.slice(2, input.length - 1).map(_ => _.split(" ").map(_ => Number(_)));

var graph = {}

for(var i=0 ; i < costInfo.length ; i++) {
  const [s, e, cost] = costInfo[i];

  if(s in graph) graph[s].push([e, cost]);
  else graph[s] = [[e, cost]];
}

var [start, end] = input[input.length - 1].split(" ").map(_ => Number(_));

solution(N, M , graph, start, end)