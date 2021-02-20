// 백준 6198. 옥상 정원 꾸미기

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
/* ============================================================== */

// g<Object> : 그래프
// d<Array> : 건물 지어지는 데 걸리는 시간
// t<num> : 타겟
function solution(g, d, target) {
  let compelte = [];
  let answer = 0;
  let construction = [];

  while(!compelte.includes(target)) {

    for(var [key, value] of Object.entries(g)) {
      if(value.in === 0) {
        construction.push({
          num: key,
          cost: d[key]
        });
        g[key].in = -9999;
      }
    }

    construction.sort((a, b) => a.cost - b.cost);

    const {num, cost} = construction.shift();

    for(var i=0 ; i < construction.length ; i++) {
      construction[i].cost -= cost;
    }

    for(var connectBuild of g[num].out) {
      g[connectBuild].in--;
    }

    delete g[num];
    compelte.push(parseInt(num));
    answer += cost;
  }

  console.log(answer);
}

const input = `1
5 5
1 1 1 1 1
1 2
2 3
3 5
3 4
4 5
5`.split('\n');

let g = {};
const T = parseInt(input.shift());

for(var i=0 ; i < T ; i++) {
  const [W, N] = input.shift().split(" ").map(_ => parseInt(_));
  const d = [0, ...input.shift().split(" ").map(_ => parseInt(_))];
  

  for(var j=0 ; j < N ; j++) {
    const [s, e] = input.shift().split(" ").map(_ => parseInt(_));

    if(g[s] === undefined) {
      g[s] = {
        out : [e],
        in : 0
      }
    } else g[s].out.push(e);

    if(g[e] === undefined) {
      g[e] = {
        out : [],
        in : 1
      }
    } else g[e].in++;
  }

  const target = parseInt(input.shift());
  solution(g, d, target);
  g = {};
}
