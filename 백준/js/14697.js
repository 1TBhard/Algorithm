// 백준 14697. 방 배정하기 

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")
/* ============================================================== */

function solution(all_room, n) {
  let answer = 0;
  let answer_find_flag = false;
  const find_p = (r, left_n) => {
    if(answer_find_flag) return;
    let max_in = parseInt(left_n / all_room[r]);

    if(r >= all_room.length - 1) {
      if(left_n - parseInt(all_room[r] * max_in) === 0) {
        answer_find_flag = true;
        answer = 1;
      }
      return;
    }

    for(;max_in >= 0; max_in--) {
      find_p(r+1, left_n - all_room[r] * max_in);
    }
  }

  find_p(0, n);
  console.log(answer);
}


const N = 112;
const all_room = [3, 6, 9];

// const N = input[input.length - 1];
// const all_room = input.slice(0, 3);

solution(all_room, N);