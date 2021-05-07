// 백준 10986. 나머지 합

// /* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// /* ============================================================== */

function solution(n, m, arr) {

  let answer = 0;
  let dic = {};
  let tempSum=0;

  for(var i=0 ; i < arr.length ; i++) {
      tempSum = (tempSum + arr[i]) % m
      dic[tempSum] = (dic[tempSum] | 0) + 1;
  }

  for(var key in dic) {
    if(dic[key] > 1)
      answer += parseInt(dic[key] * (dic[key] - 1) / 2);
  }

  console.log(answer + (dic[0] | 0));
}

input = `10 4
4 2 8 7 1 5 9 2 4 3`.split("\n");

var [n, m] = input[0].split(" ").map(_ => parseInt(_));
var arr = input[1].split(" ").map(_ => parseInt(_));

solution(n, m, arr);