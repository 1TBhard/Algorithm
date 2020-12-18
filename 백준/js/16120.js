// 백준 15120. PPAP 
// 스택인 아닌 PPAP, P가 2개 나온 이후 A가 나오는 것을 이용
// P의 개수에 따라 답인지 판단

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];
/* ============================================================== */

function solution(str) {
  let p_cnt = 0;


  for(var i=0 ; i<str.length ; i++) {
    
    if(str[i] === "A") {
      if(p_cnt >= 2 && str[i + 1] == "P") {
        p_cnt--;
        i++;
      } else {
        console.log("NP");
        return;
      }
      
    } else
      p_cnt++;
  }

  // PPAPP 인 경우 방지
  if(p_cnt === 1)
    console.log("PPAP");
  else
    console.log("NP");
}

// solution(input);

solution("PPAPP");