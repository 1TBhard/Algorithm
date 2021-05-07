// 백준 15927. 회문은 회문아니야!!
// 답은 -1 or 전체_문자열_길이 or 전체_문자열_길이 - 1, 3가지 중 하나임

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim()
/* ============================================================== */

function solution(str) {
  const halfStrLength = parseInt(str.length / 2);
  const dic = {}

  for(var i=0 ; i <= halfStrLength ; i++) {
    if(str[i] != str[str.length - 1 - i]) {
      console.log(str.length)
      return;
    }
    dic[str[i]] = dic[str[i]] | 1;
  }

  if(Object.keys(dic).length > 1) console.log(str.length - 1)
  else console.log(-1);
}

input = `ABCBA`

solution(input)