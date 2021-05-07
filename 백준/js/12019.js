// 백준 12019. 동아리방 청소!

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(n, m, arr) {
  const temp = Array.from(Array(n+1), _ => new Array(m+1).fill(0).map(_ => new Array(n+1).fill(-1)))

  const go = (now, cnt, state, dust) => {
    if(now == n + 1) return 0;
    if(temp[now][cnt][state] !== -1) return temp[now][cnt][state]

    temp[now][cnt][state] = go(now + 1, cnt, state, dust + arr[now]);
    if (cnt > 0) temp[now][cnt][state] = Math.min(temp[now][cnt][state], go(now + 1, cnt - 1, now, 0));

    temp[now][cnt][state] = temp[now][cnt][state] + arr[now] * dust
	  return temp[now][cnt][state];
  }

  const traceback = (cnt, state) => {
    for (var i = 1 ; i < n ; i++) {
      if (!cnt) break;
      if (temp[i + 1][cnt][state] >= temp[i + 1][cnt - 1][i]) {
        state = i;
        console.log(i);
        cnt--;
      }
    }
    return;
  }

  console.log(go(1, m, 0, 0));
  traceback(m, 0);
}

input = `8 2
5 8 6 10 1 15 3 9`.split("\n");

var [n, m] = input[0].split(" ").map(_ => parseInt(_));
var arr = [0, ...input[1].split(" ").map(_ => parseInt(_))];

solution(n, m, arr)


// // dp[날짜][청소남은횟수][마지막으로 청소한 날]

// // 1일
// // 5  8     6    10     1   15    3     9
// 1[2]
// 1[1]
// 1[0]

// // 2일
// // 5  8   6  10   1   15   3   9 
// //[5, 13, 19, 29, 30, 45, 48, 57]
// 2 [0, 40, 118,  308,  337, 787, 922, 1354]
// 1 [0,  0,  0,  0,  0,  0,  0,  0]
// 0 [0,  0,  0,  0,  0,  0,  0,  0]

// // 3일
// // 5   8   6  10   1  15  3   9 
// 2 [5, 13, 19, 29, 30, 45, 48, 54]
// 1 [0,  0, 0, 0, 0, 0, 0, 0]
// 0 [0, 0, 0, 0, 0, 0, 0, 0]

// // 4일
// // 5  8   6  10  1  15 3  9 
// 2 [0, 40, 118, 230+118, 0, 0, 0, 0]
// 1 [0, 0, 0, 0, 0, 0, 0, 0]
// 0 [0, 0, 0, 0, 0, 0, 0, 0]