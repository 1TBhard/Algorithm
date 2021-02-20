// 백준 1747. 소수&팰린드롬 분류

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(n) {
  let era = new Array(2000000).fill(true);

  // 0과 1은 소수가 아님
  era[0] = false
  era[1] = false
  const isPallin = (num) => {
    const str = String(num);

    for(var k=0 ; k < Math.ceil(str.length / 2) ; k++)
      if(str[k] !== str[str.length - 1 - k]) return false;
  
    return true;
  }

  for(var i=2 ; i <= 1000 ; i++) {
    for(var j=2 ; i * j < era.length ; j++)
      era[i * j] = false;
  }

  for(var i=n ; i < era.length ; i++) {
    if(era[i] === true && isPallin(i)) {
      console.log(i);
      break;
    }
  }
}

input = 1

solution(parseInt(input));