// 백준 9663. N-Queen
// 퀸을 두고 우상단, 상단, 좌상단 으로 찾아가 Queen 이 있으면 안되는 것으로
// 재귀 dfs를 활용하여 풀었음

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const N = parseInt(input[0]);

/* ============================================================== */

function solution(n) {
	let map = Array.from(Array(n), () => Array(n).fill(0));
	let answer = 0;

	// 퀸 발견시 true, 발견 못하면 false
	let findQueen = (y, x) => {
		for (var nextY = y - 1, j = 1; nextY >= 0; nextY--, j++) {
			// 좌상으로 이동
			if (x - j >= 0 && map[nextY][x - j] === 1) return true;

			// 위 이동
			if (map[nextY][x] === 1) return true;

			// 우상으로 이동
			if (x + j < n && map[nextY][x + j] === 1) return true;
		}

		return false;
	};

	const dfs = (y) => {
		if (y >= n) {
			answer++;
			return;
		}

		for (var x = 0; x < n; x++) {
			if (!findQueen(y, x)) {
				map[y][x] = 1;
				dfs(y + 1);
				map[y][x] = 0;
			}
		}
	};

	dfs(0);

	console.log(answer);
}

const N = 10;
solution(N);
