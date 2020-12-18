// 백준 2257. 화학식량

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const CHEMICAL_FORMULA = input[0];

/* ============================================================== */
/**
 * @param { param: String } 화학식
 * @returns { void }
 */

function solution(param) {
  let stack = [0];
  let answer = 0;

  // 화학식량
  const CHEMICAL_TABLE = {
    H: 1,
    C: 12,
    O: 16
  };

  for(var i=0 ; i<param.length ; i++) {
    var ch = param[i];

    switch(ch) {
      case '(':
        stack.push(0);
        break;

      case ')':
        // 다음 문자
        var nextChar = parseInt(param[i + 1]);

        // nextChar 가 숫자가 아닐 때
        if(isNaN(nextChar)) nextChar = 1;
        else i++;
        
        stack[stack.length - 2] += stack[stack.length - 1] * nextChar;
        stack.pop();
        break;

      default:
        // 숫자가 아닌 C, H, O 인 경우
        if(isNaN(parseInt(ch))) {
          // 다음 문자
          var nextChar = parseInt(param[i + 1]);

          // nextNum 가 숫자가 아닐 때
          if(isNaN(nextChar)) nextChar = 1; 
          else i++;
          
          stack[stack.length - 1] += CHEMICAL_TABLE[ch] * nextChar;
        }
        // 2~9 까지 숫자인 경우
        else
          stack[stack.length - 1] *= parseInt(ch);
        
    }
  }

  while(stack.length > 0) {
    answer += stack.pop();
  }

  console.log(answer);
}

// const CHEMICAL_FORMULA = "CH(CO2H)(CO2H)(CO2H)"
// const CHEMICAL_FORMULA = "CH(CO2H)3"

solution(CHEMICAL_FORMULA);