// 백준 16943. 숫자 재배치

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(a, b) {
  const LIST = a.toString()
  let combination_a_num = []

  const recursive = (str, seletedIdxList) => {
    if(seletedIdxList.length >= LIST.length) {
      combination_a_num.push(parseInt(str));
      return;
    }

    for(var i=0 ; i < LIST.length ; i++) {
      if(seletedIdxList.includes(i) || (str + LIST[i])[0] === "0") continue;

      recursive(str + LIST[i], [...seletedIdxList, i]);
    }
  }

  recursive("", []);

  combination_a_num.sort((a, b) => b - a);

  combination_a_num = combination_a_num.filter(n => n <= b);

  if(combination_a_num.length == 0) {
    console.log(-1);
  } else {
    console.log(combination_a_num[0]);
  }
}

// solution(789, 123);
var [a, b] = input.split(" ");
solution(a, b);