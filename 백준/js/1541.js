// 백준 1541. 잃어버린 괄호
// - 되는 것으로 split 하여 +를 최대한 키우고 그것을 빼는 형식으로 풀이함

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

/* ============================================================== */

function solution(exp) {
  const m = exp.split("-");

  const calculateExp = (str) => {
    let numList = str.match(/[0-9]+/g);

    return numList.reduce((acc, cur) => acc + parseInt(cur), 0);
  }

  let answer = -1;
  
  // - 로 시작하는 경우
  if(m[0] === '') answer = 0;

  // 양수로 시작
  else answer = calculateExp(m[0])

  for(var i=1 ; i < m.length ; i++)
    answer -= calculateExp(m[i]);

  console.log(answer);
}

solution(input);