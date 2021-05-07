// 백준 1342. 행운의 문자열 분류

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(s) {
  let answer = 0;

  const recursive = (str, lastChar) => {
    if(str.length === 0) {
      answer++;
      return;
    }

    // dic 으로 중복 체크
    let dic = {
      [lastChar]: 9
    }

    for(var i=0 ; i < str.length ; i++) {
      
      if(str[i] in dic) continue;

      dic[str[i]] = i;

      recursive(str.slice(0, i) + str.slice(i+1, str.length), str[i])
    }
  }

  recursive(s, "");

  console.log(answer);
}

// solution(input)
solution("abcde")