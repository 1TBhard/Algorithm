/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
	const go = (i) => {
		let idx = i;

		for (let level of grid) {
			if (checkIsVally(level, idx)) {
				return -1;
			} else {
				idx += level[idx];

				if (isOut(level, idx)) {
					return -1;
				}
			}
		}

		return idx;
	};

	const isOut = (level, idx) => {
		return idx < 0 || idx >= level.length;
	};

	const checkIsVally = (level, idx) => {
		if (level[idx] === 1 && level[idx + 1] === -1) return true;
		if (level[idx] === -1 && level[idx - 1] === 1) return true;
		return false;
	};

	const answer = [];

	for (let j = 0; j < grid[0].length; j++) {
		answer.push(go(j));
	}

	return answer;
};

const grid = [
	[1, 1, 1, -1, -1],
	[1, 1, 1, -1, -1],
	[-1, -1, -1, 1, 1],
	[1, 1, 1, 1, -1],
	[-1, -1, -1, -1, -1],
];

findBall(grid);
