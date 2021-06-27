// 백준 13549. 숨바꼭질 3

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")
/* ============================================================== */

/*
시간에 연연하지 말자
어떻게 도착한 곳을 기점으로 그전의 시간과 연계성을 생각하자
*/
function solution(start, end) {
  const MAX = 100000
  const visited = new Array(MAX+1).fill(-1);

  const q = [start];
  visited[start] = 0

  while(q.length > 0) {
    const cur = q.splice(0, 1)[0];

    if(cur === end) {
      console.log(visited[end]);
      return;
    }

    if(cur * 2 <= MAX) {
      visited[cur * 2 ] = visited[cur];
      q.push(cur * 2);
    }

    if(cur - 1 >= 0 && visited[cur - 1] === -1) {
      visited[cur - 1] = visited[cur] + 1
      q.push(cur - 1);
    }

    if(cur + 1 <= MAX && visited[cur + 1] === -1) {
      visited[cur+1] = visited[cur] + 1
      q.push(cur + 1)
    }
  }
}

input = `5 17`.split(" ")

var [start, end] = input.map(_ => parseInt(_));
solution(start, end)

