// 행렬을 시계방향으로 90도 회전은 Transpose 후 각 행마다 reverse 하면 된다.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	const tempMatrix = Array.from(Array(matrix.length).fill(false), (_, index) =>
		matrix[index].slice()
	);

	// Transpose
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			matrix[i][j] = tempMatrix[j][i];
		}
		// reverse
		matrix[i].reverse();
	}

	return matrix;
};

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

rotate(matrix);
