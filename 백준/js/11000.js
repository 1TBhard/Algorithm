// 백준 11000. 선 긋기

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split('\n');
/* ============================================================== */

function solution(arr) {
  arr.sort((a, b) => {
    if(a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let q = arr.splice(0, 1);

  for(var [start, end] of arr) {
    const [_, q_e] = q[0]

    if(start >= q_e) {
      q.splice(0, 1);
      q.push([start, end]);
    } else {
      q.push([start, end]);
    }
  }

  console.log(q.length);
}

const input = `3
1 3
2 5
7 8
9 10
7 11
4 12`.split("\n");

const arr = input.slice(1, input.length).map(a => {
  var [first, last] = a.split(" ").map(str => parseInt(str))
  
  return first < last ? [first, last] : [last, first];
});

solution(arr);