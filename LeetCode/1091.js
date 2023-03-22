/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	const firstItem = [1, 0, 0];
	const q = [firstItem];

	const canGo = (i, j) => {
		if (i < 0 || i >= grid.length) return false;
		if (j < 0 || j >= grid[0].length) return false;
		if (grid[i][j] !== 0) return false;

		return true;
	};

	if (grid[grid.length - 1][grid[0].length - 1] === 1) return -1;
	if (grid[0][0] === 1) return -1;

	while (q.length) {
		let [cost, i, j] = q.pop();

		if (i === grid.length - 1 && j === grid.length - 1) return cost;

		[
			[i - 1, j - 1],
			[i - 1, j],
			[i - 1, j + 1],
			[i, j - 1],
			[i, j + 1],
			[i + 1, j - 1],
			[i + 1, j],
			[i + 1, j + 1],
		].forEach(([nextI, nextJ]) => {
			if (!canGo(nextI, nextJ)) return;

			grid[nextI][nextJ] = 2;
			q.unshift([cost + 1, nextI, nextJ]);
		});
	}

	return -1;
};

const grid = [
	[0, 1, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 1, 1],
	[0, 1, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 1],
	[0, 0, 1, 0, 1, 0],
];

console.log(shortestPathBinaryMatrix(grid));
