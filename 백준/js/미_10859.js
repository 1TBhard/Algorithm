// 백준 10859. 뒤집어진 소수
/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")
/* ============================================================== */

function solution(bigN) {

  const TURN_TABLE = {
    0: 0,
    1: 1,
    2: 2,
    3: null,
    4: null,
    5: 5,
    6: 9,
    7: null,
    8: 8,
    9: 6
  }

  const isPrime = (bigN) => {
    if(bigN === 1n) return false;
    for(var i=2n ; i * i <= bigN ; i += 1n)
      if(bigN % i === 0n) return false;
    return true;
  }

  const isValid = (bigN) => {
    var temp = bigN.toString()

    for(var i=0 ; i < temp.length ; i++)
      if(TURN_TABLE[temp[i]] == null) {
        return false;
      } 
    return true;
  }

  const turn = (bigN) => {
    var temp = bigN.toString();
    var result = "";

    for(var i=temp.length - 1 ; i >= 0 ; i--)
      result += TURN_TABLE[temp[i]];

    return BigInt(result);
  }

  if(!isValid(bigN)) {
    console.log("no");
    return;
  }

  if(!isPrime(bigN)) {
    console.log("no");
    return;
  }
  
  const reverseBigN = turn(bigN);

  if(!isPrime(reverseBigN)) {
    console.log("no");
    return;
  }

  console.log("Yes");
}

input = "1811521122111111"

solution(BigInt(input));