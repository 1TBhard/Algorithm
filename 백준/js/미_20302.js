// 백준 20302. 민트 초코

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim()
/* ============================================================== */

function solution(exp) {
  const arr = exp.split(" ");
  let hash = {};

  const era = new Array(100001).fill(true);
  era[0] = false;
  era[1] = false;

  for(var i=2 ; i <= parseInt(Math.sqrt(100000)) ; i++) {
    for(var j=2 ; i * j < era.length ; j++) {
      era[i * j] = false;
    }
  }

  // 소인수분해
  const dividePrime = (num) => {
    let resultHash = {};
    let temp = num
    let subNum = 2
    
    while(temp > 1) {
      while(era[subNum] === true && (temp % subNum == 0)) {
        resultHash[subNum] = (resultHash[subNum] | 0) + 1;
        temp = temp / subNum;
      }
      subNum++
    }

    return resultHash;
  }

  Object.entries(dividePrime(arr[0])).forEach(([subPrimeNum, value]) => {
    hash[subPrimeNum] = (hash[subPrimeNum] | 0) + value;
  });
  
  for(var i=1 ; i < arr.length ; i += 2) {
    const operator = arr[i];
    let num = Math.abs(arr[i+1]);
    const numDividePrimeHash = Object.entries(dividePrime(num))
    
    if(num === 0) {
      console.log("mint chocolate");
      return;
    }

    if(operator === "*") {
      numDividePrimeHash.forEach(([subPrimeNum, value]) => {
        hash[subPrimeNum] = (hash[subPrimeNum] | 0) + value;
      });
    }
    else {
      numDividePrimeHash.forEach(([subPrimeNum, value]) => {
        hash[subPrimeNum] = (hash[subPrimeNum] | 0) - value;
      });
    }
  }

  for(var key in hash) {
    if(hash[key] < 0) {
      console.log("toothpaste");
      return;
    }
  }

  console.log("mint chocolate");
}

// var inputExp = input.split("\n")[1];

inputExp = "1 * 2 / 3 / 4 / 5 * 6"

solution(inputExp);