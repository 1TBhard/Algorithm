// 백준 1213. 팰린드롬 만들기

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(str) {
  let answer = "";
  let charDic = {};

  for(var i=0 ; i < str.length ; i++) charDic[str[i]] = (charDic[str[i]] | 0) + 1;

  const charDicKeys = Object.keys(charDic).sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
  let findOddFlag = false;

  // 홀수 개 찾는거
  for(var key in charDic) {
    if( charDic[key] % 2 === 1) {
      answer = key;
      if(findOddFlag) {
        console.log("I'm Sorry Hansoo");
        return;
      }
      findOddFlag = true;
    }
  }

  for(var key of charDicKeys) {
    var sideString = key.repeat(Math.floor(charDic[key] / 2));

    answer = sideString + answer + sideString;
  }

  console.log(answer);
}

const input = "AABBCCCDD";

solution(input);


/* 반례

ABABB => ABBBA
ABCCD C DCCBA
AABBCCCDD => ABCDCDCBA
ddddcccaaaaeeffddss => aaccdddefscsfedddccaa
*/
