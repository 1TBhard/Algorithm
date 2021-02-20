// 백준 2916. 자와 각도기

// /* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split('\n');
// /* ============================================================== */

function solution(angle_list, targets) {
  let arr = Array(361).fill(false);

  for(var item of angle_list) {
    arr[item] = true;
  }

  // 만들 수 있는 각(확인해봐야하는 각)
  let q = angle_list;
  while(q.length > 0) {
    const num = q.shift();

    // 각도가 0일때는 무한루프 돌 수 있음 탈출!
    if(num === 0) {
      arr[0] = true
      continue;
    }

    for(var i=1 ; i<= 360  ; i ++) {

      // 현재 각도를 가지고 N번 사용해서 만들 수 있는 각
      if(i % num === 0 ) {
        if(arr[num] === false) {
          q.push(num);
        }
      }

      // 이미 만들어진 각도에 대해서
      if(arr[i] === true) {
        // 더햇을 때 360도 넘으면 안됨
        const plus = i + num > 360 ? i + num - 360 : i + num;

        // 뺏을 때 0 밑으로 내려가면 안됨
        const minus = i - num < 0 ? 360 - Math.abs(i - num) : i - num;
        
        if(arr[plus] === false) {
          q.push(plus);
          arr[plus] = true;
        }

        if(arr[minus] === false) {
          q.push(minus);
          arr[minus];
        }
      }
    }
  }

  for(var t of targets) {
    console.log(arr[t] ? "YES" : "NO")
  }
}

const input = `2 1
10 12
41 100`.split('\n');

const [n, k] = input.shift().split(" ").map(_ => parseInt(_));
const firstArr = input.shift().split(" ").map(_ => parseInt(_));
const secondArr = input.shift().split(" ").map(_ => parseInt(_));

solution(
  firstArr,
  secondArr
)