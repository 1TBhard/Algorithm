// 백준 2589. 보물섬

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();

/* ============================================================== */

function solution(LIMIT_H, LIMIT_W, map) {
	let answer = 0;
	/**
    @param {
      h: 세로 위치
      w: 가로 위치
    }
  */

	const bfs = (startX, startY) => {
		let copyMap = [...map.map((_) => [..._])];

		// 처음 시작점을 S로 잡음
		copyMap[startX][startY] = "S";

		const isCanGo = (y, x, cost) => {
			// 높이 범위를 초과
			if (y < 0 || y >= LIMIT_H) return false;

			// 너비 범위를 초과
			if (x < 0 || x >= LIMIT_W) return false;

			// 현위치가 이미 방문한 땅일 때, 코스트가 그 땅보다 높은 경우
			if (copyMap[y][x] !== "L" || copyMap[y][x] <= cost) return false;

			return true;
		};

		// 다음 방문할 땅 (y, x)가 있는 큐
		let queue = [[startY, startX, 0]];

		while (queue.length > 0) {
			var [y, x, step] = queue.shift();

			answer = Math.max(answer, step);

			var canGoUp = isCanGo(y - 1, x, step + 1);
			var canGoDown = isCanGo(y + 1, x, step + 1);
			var canGoLeft = isCanGo(y, x - 1, step + 1);
			var canGoRight = isCanGo(y, x + 1, step + 1);

			if (canGoUp) {
				queue.push([y - 1, x, step + 1]);
				copyMap[y - 1][x] = step + 1;
			}

			if (canGoDown) {
				queue.push([y + 1, x, step + 1]);
				copyMap[y + 1][x] = step + 1;
			}

			if (canGoLeft) {
				queue.push([y, x - 1, step + 1]);
				copyMap[y][x - 1] = step + 1;
			}

			if (canGoRight) {
				queue.push([y, x + 1, step + 1]);
				copyMap[y][x + 1] = step + 1;
			}
		}
	};

	for (var startY = 0; startY < LIMIT_H; startY++) {
		for (var startX = 0; startX < LIMIT_W; startX++) {
			switch (map[startY][startX]) {
				case "W":
					break;
				case "L":
					bfs(startY, startX);
					break;
			}
		}
	}

	console.log(answer);
}

const input = `3 3
WWW
WWW
WLL`;

let [POS, ...MAP] = input.split("\n");
const [HEIGHT, WIDTH] = POS.split(" ").map((ch) => parseInt(ch));

MAP = MAP.map((_) => _.split(""));

solution(HEIGHT, WIDTH, MAP);
