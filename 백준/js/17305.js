// 백준 17305. 사탕 배달

// /* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// /* ============================================================== */

function solution(arr, limit) {

  let arr_3g = [0];
  let arr_5g = [0];

  arr.sort((a, b) => b[1] - a[1]);

  for(var [gram, sugar] of arr ) {
    if(gram === 3) arr_3g.push(arr_3g[arr_3g.length - 1] + sugar);
    else arr_5g.push(arr_5g[arr_5g.length - 1] + sugar);
  }

  let answer = 0;
  const MAX_3g_CANDY_LIMIT = parseInt(limit / 3)
  const CURRENT_5G_CANDY_LIMIT = arr_5g.length - 1

  // i = 3g 사탕의 개수 
  for(var i=0 ; i <= Math.min(MAX_3g_CANDY_LIMIT, arr_3g.length - 1) ; i++) {
    const leftLimit = limit - 3 * i;

    const max_5g_idx = Math.min(CURRENT_5G_CANDY_LIMIT, Math.floor(leftLimit / 5));

    answer = Math.max(answer, arr_3g[i] + arr_5g[max_5g_idx]);
  }

  console.log(answer);
}

input = `10 10
3 10
3 20
5 60`.split("\n");

var [inputN, limit] = input[0].split(" ").map(_ => parseInt(_));

var arr = input.slice(1, input.length).map(itme => itme.split(" ").map(_ => parseInt(_)));

solution(arr, limit)