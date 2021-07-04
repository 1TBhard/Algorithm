// 백준 16888. 루트 게임

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
/* ============================================================== */


// 구사과가 낼 수 있는 모든 경우의 수를 생각하여 이기는 경우 하나 있는 경우
// 구사화과 이기는 것으로 처리
// ex) 7 -> 7 - 1^2 = 6
//    7 -> 7 - 2^2 = 3 이김
// 즉, 7일 때 구사과는 이김

function solution(N, arr) {
  const maxElementInArr = Math.max(...arr);
  const winList = new Array(maxElementInArr+1).fill(false);
  const findStack = [1];

  winList[1] = true;
  winList[2] = false;
  winList[3] = true

  for(var i=2 ; i < winList.length ; i++) {

    if(i*i < maxElementInArr + 1) {
      winList[i * i] = true;
      findStack.push(i * i)
    }

    if(!winList[i]) {
      for(var j=0 ; j < findStack.legnth ; j++) {
        winList[i + findStack[j]] = true;
      }
    }
  }

  for(var i=0 ; i<arr.length ; i++)
    console.log(winList[arr[i]] ? "koosaga" : "cubelover")
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random()) * (max - min) + min;
}

var input= `3
1000000`.split("\n")

const [N, ...arr] = input.map(_ => Number(_));

for(var i=0 ; i < 100000 ; i++)
  arr.push(getRandomArbitrary(1, 1000000))

var start = new Date().getTime();

solution(N, arr);

var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);