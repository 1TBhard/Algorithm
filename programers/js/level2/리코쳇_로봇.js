function solution(board) {
	let startPos;
	const loc = board.map((item, index) =>
		item
			.split("")
			.map((item) => (item === "." ? Number.MAX_SAFE_INTEGER : item))
	);

	for (let i = 0; i < loc.length; i++) {
		for (let j = 0; j < loc[0].length; j++) {
			if (loc[i][j] === "R") startPos = [i, j];
		}
	}

	const queue = [[...startPos, 0]];

	const canGo = (y, x) => {
		if (y < 0 || y > loc.length - 1) return false;
		if (x < 0 || x > loc[0].length - 1) return false;
		return loc[y][x] !== "D";
	};

	const goUp = (y, x) => {
		let nextY = y;
		while (canGo(nextY, x)) {
			nextY -= 1;
		}
		return [nextY + 1, x];
	};

	const goDown = (y, x) => {
		let nextY = y;
		while (canGo(nextY, x)) {
			nextY += 1;
		}
		return [nextY - 1, x];
	};

	const goLeft = (y, x) => {
		let nextX = x;
		while (canGo(y, nextX)) {
			nextX -= 1;
		}
		return [y, nextX + 1];
	};

	const goRight = (y, x) => {
		let nextX = x;
		while (canGo(y, nextX)) {
			nextX += 1;
		}
		return [y, nextX - 1];
	};

	let answer = -1;
	while (queue.length) {
		const [y, x, cost] = queue.shift();

		const nextCost = cost + 1;

		if (answer !== -1) break;

		[goUp(y, x), goDown(y, x), goLeft(y, x), goRight(y, x)].forEach(
			([nextY, nextX]) => {
				if (loc[nextY][nextX] === "G") {
					answer = nextCost;
					loc[nextY][nextX] = nextCost;
					return;
				}
				if (loc[nextY][nextX] > nextCost) {
					loc[nextY][nextX] = nextCost;
					queue.push([nextY, nextX, nextCost]);
				}
			}
		);
	}

	return answer;
}

const TEST_LIST = [
	{
		data: ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."],
		expect: 7,
	},
	{
		data: [".D.R", "....", ".G..", "...D"],
		expect: -1,
	},
];

TEST_LIST.forEach((test, index) => {
	const result = solution(test.data);
	const isClear = result === test.expect;
	if (isClear) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
