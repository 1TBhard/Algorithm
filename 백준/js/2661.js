// 백준 2661. 좋은수열 

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
/* ============================================================== */

function solution(n) {
  let flag = false;

  const recursive = (str) => {
    if(flag) return;
    if(str.length == n) {
      console.log(str);
      flag = true
      return;
    }
    
    let canBeList = ['1', '2', '3'];

    for(var i=2 ; i >= 0 ; i--) {
      str = str + canBeList[i];
      for(var len = 1; str.length - len * 2 >= 0 ; len++) {
        let lastChunk = str.slice(str.length - len, str.length);
        let nextLastChunk = str.slice(str.length  - len * 2, str.length  - len);

        if(lastChunk == nextLastChunk) {
          canBeList.splice(i, 1);
          break;
        }
      }
      str = str.slice(0, str.length - 1);
    }
      
    if(canBeList.length == 0) return;

    for(var i=0 ; i<canBeList.length ; i++)
      recursive(str + canBeList[i]);
  }

  recursive("");
}


solution(parseInt(input));