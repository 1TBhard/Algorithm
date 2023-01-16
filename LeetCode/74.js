/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	const returnIJ = (number) => {
		const i = Math.floor(number / matrix[0].length);
		const j = Math.max(Math.floor(number - i * matrix[0].length), 0);

		return [i, j];
	};

	let low = 0;
	let high = matrix.length * matrix[0].length;

	while (low < high) {
		const mid = Math.floor((low + high) / 2);
		const [midI, midJ] = returnIJ(mid);

		if (matrix[midI][midJ] === target) return true;
		else if (matrix[midI][midJ] < target) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}

	return false;
};

const MATRIX = [
	[1, 3, 5, 7],
	[10, 11, 16, 20],
	[23, 30, 34, 50],
];

const TARGET = 10;

console.log(searchMatrix(MATRIX, TARGET));
