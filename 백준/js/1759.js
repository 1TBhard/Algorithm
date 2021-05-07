// 백준 1759. 암호 만들기

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution(str, limitLength) {
  let answer = [];
  str.sort()

  const mo = ['a', 'e', 'i', 'o', 'u'];

  const recursive = (idx, temp, moHasOne, zaHas) => {
    if(temp.length == limitLength && moHasOne && zaHas >= 2) {
      answer.push(temp);
      return;
    }
    if(idx >= str.length) return;

    recursive(
      idx+1,
      temp + str[idx], moHasOne | mo.includes(str[idx]),
      !mo.includes(str[idx]) ? zaHas + 1 : zaHas
    );
    recursive(idx+1, temp, moHasOne, zaHas);
  };


  recursive(0, "", false, 0);

  for(var item of answer)
    console.log(item);
}

const [L, C] = input[0].split(" ");
const str = input[1].split(" ");

solution(str, L)