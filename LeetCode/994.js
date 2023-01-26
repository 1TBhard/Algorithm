/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	let answer = 0;

	const canGo = (curI, curJ) => {
		if (curI < 0 || curI >= grid.length) return false;
		if (curJ < 0 || curJ >= grid[0].length) return false;
		if (grid[curI][curJ] === 2 || grid[curI][curJ] === 0) return false;

		return true;
	};

	const rottenList = [];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 2) {
				rottenList.push([i, j, 0]);
			}
		}
	}

	const nextGoList = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	];

	while (rottenList.length > 0) {
		const [curI, curJ, curSec] = rottenList.shift();

		answer = Math.max(answer, curSec);

		nextGoList.forEach(([nextGoI, nextGoJ]) => {
			let nextI = curI + nextGoI;
			let nextJ = curJ + nextGoJ;

			if (canGo(nextI, nextJ)) {
				rottenList.push([nextI, nextJ, curSec + 1]);
				grid[nextI][nextJ] = 2;
			}
		});
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) {
				return -1;
			}
		}
	}

	return answer;
};

const TEST = [
	[2, 1, 1],
	[1, 1, 0],
	[0, 1, 1],
];

console.log(orangesRotting(TEST));
