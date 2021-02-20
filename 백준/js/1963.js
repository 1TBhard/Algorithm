// 백준 1963. 소수 경로

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split('\n');
/* ============================================================== */

function solution(a, b) {
  let arr = Array(10000).fill(true);
  
  const LIMIT = Math.ceil(Math.sqrt(10000))

  for(var i=2 ; i <= LIMIT ; i++ ) {
    for(var j=1 ; i * j < 10000 ; j++) {
      arr[i * j] = false;
    }
  }
  
  const isSosu = (num) => arr[num];

  // 한 자리수만 바꿔도 소수가 되는 숫자 리스트 반환
  const findNextChange = (startNum) => {
    let result = [];
    for(var i=0 ; i < startNum.length ; i++) {
      for(var n = i === 0 ? 1 : 0 ; n <= 9 ; n++) {
        if(n === parseInt(startNum[i])) continue;
        const nextNum = startNum.substr(0, i) + n + startNum.substr(i+1, startNum.length);
        if(!isSosu(parseInt(nextNum))) continue;
        result.push(nextNum);
      }
    }

    return result;
  }

  let g = {}
  for(var i = 1000 ; i < 10000 ; i++) {
    if(isSosu(i)) g[i] = findNextChange(String(i));
  }

  let q = [a];
  let visited = new Set();

  let answer = 0;
  while(q.length > 0) {
    const roundLimit = q.length;
    
    for(var roundCnt=0 ; roundCnt < roundLimit ; roundCnt++) {
      const num = q.shift();
      if(visited.has(num)) continue;

      if(num === b) {
        console.log(answer);
        return;
      }

      visited.add(num);
      q = [...q, ...g[num]];
    }

    answer++;
  }
  
  console.log("Impossible");
}

// const input = `3
// 1033 8179
// 1373 8017
// 1033 1033`.split("\n");

const N = parseInt(input.shift());

for(var i=0 ; i < N ; i++) {
  let [a, b] = input.shift().split(" ");
  solution(a, b);
}

