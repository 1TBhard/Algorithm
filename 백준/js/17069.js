// 백준 17069. 파이프 옮기기 2

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

// 전의 기준으로
// 0: 가로
// 1: 세로
// 2: 대각선
function solution(n, map) {
	const arr = Array.from(Array(n), () =>
		Array.from(Array(n), () => new Array(3).fill(0))
	);

	for (let k = 1; k < n - 1 && map[0][k] === 0; k++) {
		arr[0][k][0] = 1;
	}

	for (let i = 1; i < n; i++) {
		for (let j = 1; j < n; j++) {
			if (map[i][j] === 1) continue;
			else if (map[i - 1][j] === 1) {
				arr[i][j][0] = arr[i][j - 1][0] + arr[i][j - 1][2];
			} else if (map[i][j - 1] === 1) {
				arr[i][j][1] = arr[i - 1][j][1] + arr[i - 1][j][2];
			} else {
				arr[i][j][0] = arr[i][j - 1][0] + arr[i][j - 1][2];
				arr[i][j][1] = arr[i - 1][j][1] + arr[i - 1][j][2];
				arr[i][j][2] =
					arr[i - 1][j - 1][0] + arr[i - 1][j - 1][1] + arr[i - 1][j - 1][2];
			}
		}
	}

	let result = arr[n - 1][n - 1].reduce((acc, num) => num + acc, 0);

	console.log(result);
}

const n = parseInt(input.shift());
const map = input.map((arr) => arr.split(" ").map((_) => parseInt(_)));

solution(n, map);
