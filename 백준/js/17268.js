// 백준 17268. 미팅의 저주

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */


function solution(n) {
  let arr = [1n];
  const limit = n / 2

  if(n <= 0) {
    console.log(0);
    return;
  }

  for(var i=1 ; i <= limit ; i++) {
    let result = arr.reduce((acc, _, idx) => 
        (acc + (arr[idx] * arr[arr.length - 1 - idx]) % 987654321n) % 987654321n
    , 0n);

    arr.push(result);
  }
  console.log(arr[limit].toString().replace("n", ""));
}

input = 10000

// input = "4"

solution(parseInt(input))