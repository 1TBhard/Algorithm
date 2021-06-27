// 백준 16637. 괄호 추가하기

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution(exp) {
  const numArr = exp.match(/\d/g).map(_ => parseInt(_));
  const operatorArr = exp.match(/\D/g);

  const calculate = (a, operator, b) => {
    switch(operator) {
      case '+':
        return a + b
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        console.error(a, b, "ERROR");
        return 0;
    }
  }

  // 최저값을 음수로
  let answer = -999999999999999;
  let stack = [[1, numArr[0]]];

  while(stack.length > 0) {
    const [curIdx, result] = stack.pop();

    if(curIdx === numArr.length) {
      answer = Math.max(answer, result);
      continue;
    }

    if(curIdx+2 <= numArr.length) {
      const galhoCalculate = calculate(numArr[curIdx], operatorArr[curIdx], numArr[curIdx+1]);

      stack.push([curIdx+2, calculate(result, operatorArr[curIdx-1], galhoCalculate)]);
    }
      
    stack.push([curIdx+1, calculate(result, operatorArr[curIdx-1], numArr[curIdx])]);
  }

  console.log(answer);
}

var N = parseInt(input[0]);

if(N <= 3) {
  console.log(eval(input[1]));
  process.exit(0);
}

var exp = input[1];

solution(exp);