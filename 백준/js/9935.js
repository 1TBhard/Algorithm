// 백준 9935. 문자열 폭발

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const [STR, BOMB_STR] = input;                                                   // 입력될 숫자들
/* ============================================================== */

function solution(str, bombStr) {
  let queue = [];
  let stack = [];
  let j = 0;

  for(var i=0 ; i<str.length ; i++) {
    queue.push(str[i]);

    if(str[i] !== bombStr[j]) {
      if( j === 0) continue;

      stack.push(j);
      j = 0;

      if(str[i] === bombStr[j]) 
        j++;
    }
    else {
      j++;
    }
    
    if(j === bombStr.length) {
      queue.splice(queue.length - bombStr.length,  bombStr.length);
      if(stack.length > 0) j = stack.pop();
      else j = 0;
    }
  }

  if(queue.length === 0) console.log("FRULA");
  else console.log(queue.join(""));
}

const [STR, BOMB_STR] = [
  'aaaaaaaaaaaaaaaa',
  'a'
];                                                   // 입력될 숫자들

solution(STR, BOMB_STR);
