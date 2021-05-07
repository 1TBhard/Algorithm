// 백준 20440. 🎵니가 싫어 싫어 너무 싫어 싫어 오지 마 내게 찝쩍대지마🎵 - 1

// /* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// /* ============================================================== */

function solution(arr) {

  let dic = {}

  for(var [inSec, outSec] of arr) {
    dic[inSec] = (dic[inSec] | 0) + 1
    dic[outSec] = (dic[outSec] | 0) - 1
  }

  let answer = {
    start: 0,
    end: 0
  };

  let maxMogi = 0;
  let maxIdx = 0;
  let currentMogi = 0;


  const dicKey = Object.keys(dic)
  dicKey.sort((a, b) => parseInt(a) - parseInt(b))

  for(var i=0 ; i < dicKey.length ; i++) {
    const time = dicKey[i];
    currentMogi += dic[time];

    if(maxMogi < currentMogi) {
      maxIdx = i;
      answer.start = time;
      maxMogi = currentMogi
    }
  }

  for(var i=maxIdx ; i < dicKey.length ; i++) {
    const time = dicKey[i];

    if(dic[time] < 0) {
      answer.end = time;
      break;
    }
  }
  console.log(`${maxMogi}\n${answer.start} ${answer.end}` );
}


var arr = input.slice(1, input.length).map(
    item => item.split(" ").map(
      strNum => parseInt(strNum)
  ));
  
solution(arr);
