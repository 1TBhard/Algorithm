// 백준 17425. 약수의 합 분류

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
/* ============================================================== */




input = `5
1
2
10
70
1000000`.split("\n");

let inputArr = input.slice(1, input.length).map(_ => parseInt(_));


const arr = new Array(1000001).fill(0).map((_, idx) => idx);

const limit = Math.round(Math.sqrt(arr));

for(var i=1 ; i <= 1000000 ; i++) {
  arr[i] += arr[i-1];
  if(i >= limit) continue;
  for(var j=2 ; i * j < arr.length ; j++) {
    arr[i * j] += i;
  }
}

for(var i=0 ; i < inputArr.length ; i++) {
  console.log(arr[inputArr[i]])
}