// 백준 2436. 공약수 

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

// gcd: 최대 공약수
// lcm: 최소 공배수
function solution(gcd, lcm) {
  let nm = Math.round(lcm / gcd);

  let answer = [1, nm];

  // 서로소인지?
  const isCoprime = (a, b) => {
    let [big, small] = a > b ? [a, b] : [b, a];
    
    for(var i=small ; i > 1 ; i--) {
      if(big % i === 0 
        && small % i === 0) return false;
    }

    return true;
  }

  for(var a=1 ; a <= Math.ceil(nm / 2) + 1 ; a++) {
    if(nm % a !== 0) continue;
    
    const [ans_a, ans_b] = answer;
    var b = Math.ceil(nm / a);

    if(!isCoprime(a, b)) continue;
    
    if(ans_a + ans_b > a + b ) answer = [a, b];
  }

  answer.sort();

  console.log(`${answer[0] * gcd} ${answer[1] * gcd}`);
}

const input = "2 9404"
const [a, b] = input.split(" ").map(_ => parseInt(_));

solution(a, b);
