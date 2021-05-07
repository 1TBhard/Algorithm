// 백준 2023. 신기한 소수 분류

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function isPrime (num) {
  for(var i = 2 ; i*i <= num ; i++)
    if(num % i == 0)  return false;

  return true;
}

function solution(n) {
  const arr = [1, 3, 5, 7, 9];
  const answer = [];

  const recursive = (str) => {
    if(str.length == n) {
      console.log(str);
      return;
    }

    for(var i=0 ; i < arr.length ; i++) {
      if(isPrime(parseInt(str + arr[i]))) recursive(str + arr[i]);
    }
  }

  // 맨 앞자리는 2, 3, 5, 7 밖에 올 수 없음
  recursive("2");
  recursive("3")
  recursive("5")
  recursive("7")

  console.log(answer.map(_ => parseInt(_)).join("\n"));
}

input = 8

solution(parseInt(input));

