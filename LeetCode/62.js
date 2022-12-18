/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	const arr = Array.from(Array(m), () => Array(n).fill(0));

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 || j === 0) {
				arr[i][j] = 1;
				continue;
			}

			arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
		}
	}

	return arr[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
