// 백준 2225. 합분해
/*
1 1 1 1 
2 3 4 5
3 6 10 15
4 10 20 35
...
*/

/*
L: 0 ~ N 에서 마지막 수

/￣ K ￣\
(N-L) + L = N
\k-1/

(0 ~ L) + L = 0 ~ N 까지
*/

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
/* ============================================================== */

function solution(n, k) {
  let arr = Array.from(Array(k), () => Array(n).fill(0));

  // 가로를 1 1 1 1 1 1 1 ...
  for(var i=0 ; i<n ; i++) arr[0][i] = 1;

  // 세로를 2 3 4 5 6 ...
  for(var j=1 ; j<k ; j++) arr[j][0] = j+1;

  for(var i=1 ; i < k ; i++) {
    for(var j=1 ; j < n ; j++) {
      arr[i][j] = Math.ceil((arr[i-1][j] + arr[i][j-1]) % 1000000000);
    }
  }

  console.log(arr[k-1][n-1]);
}

let input = ["1", "3"];

let [n, k] = input.map(_ => parseInt(_));
solution(n, k);