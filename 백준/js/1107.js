// 백준 1107. 리모컨

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

// 일단 리모콘 숫자로 이동할 수 있는 숫자 찾고
// 그 숫자에서 목표 채널까지 얼마나 걸리는지 구한다!!

function solution(target, brokenChannel) {
  let answer = Math.abs(target - 100); // 100 번 채널에서 시작하므로

  const CHANNEL = new Array(10).fill(true);
  brokenChannel.forEach(num => CHANNEL[num] = false );
  
  for(var i=0 ; i< (target + 1) * 10 ; i++) {
    const strNum = String(i).split("");
    
    let pressNumButtonTry = 0;
    let canNumberButton = true;
    for(var j=0 ; j < strNum.length ; j++) {
      if(CHANNEL[parseInt(strNum[j])] == false) {
        canNumberButton = false;
        break;
      }
      pressNumButtonTry++;
    }

    if(canNumberButton)
      answer = Math.min(answer, Math.abs(target - i) + pressNumButtonTry);
  }

  console.log(answer);
}

var target = parseInt(input[0])

var brokenChannelNum = parseInt(input[1]);
// 고장난 채널 없을 때
if(brokenChannelNum === 0) {
  console.log(
    Math.min(
      String(target).split("").length,
      Math.abs(100 - target)
  ));
  process.exit(0);
}

var brokenChannel = input[2].split(" ").map(_ => parseInt(_));

solution(target, brokenChannel);