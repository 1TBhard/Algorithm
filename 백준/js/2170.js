// 백준 2170. 선 긋기
// 아니 문제가 무슨 x, y 라 하니까 2차원 좌표인줄 알았는데 아니잖아...

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split('\n');
/* ============================================================== */

function solution(arr) {
  arr.sort((a, b) => {
    if(a[0] - b[0] == 0) return a[1] - b[1]
    else return a[0] - b[0]
  });

  let result = 0;

  let lastEnd = 0;

  for(var [first, last] of arr) {
    
    if(first <= lastEnd) {
      result += last - lastEnd
    } else {
      result += last - first
    }

    lastEnd = last
  }

  console.log(result);
}

const input = `3
1 3
1 2
7 6`.split("\n");

const n = input[0];

const arr = input.slice(1, input.length).map(a => {
  var [first, last] = a.split(" ").map(str => parseInt(str))
  
  return first < last ? [first, last] : [last, first];
});

solution(arr);