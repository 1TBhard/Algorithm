/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const answer = [];

	let iLimit = matrix.length - 1;
	let jLimit = matrix[0].length;

	let direction = 1;

	let i = 0,
		j = 0;
	while (answer.length < matrix[0].length * matrix.length) {
		for (let t = 0; t < jLimit; t++, j += direction) {
			answer.push(matrix[i][j]);
		}

		j -= direction;
		i += direction;

		for (let t = 0; t < iLimit; t++, i += direction) {
			answer.push(matrix[i][j]);
		}

		i -= direction;

		direction *= -1;

		j += direction;

		if (jLimit === 0 || iLimit === 0) {
			break;
		}

		iLimit--;
		jLimit--;
	}

	return answer;
};

// var spiralOrder = function (matrix) {
// 	const res = [];
// 	while (matrix.length) {
// 		const first = matrix.shift();
// 		res.push(...first);
// 		for (const m of matrix) {
// 			let val = m.pop();
// 			if (val) res.push(val);
// 			m.reverse();
// 		}
// 		matrix.reverse();
// 	}
// 	return res;
// };

const M = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
];

spiralOrder(M);
