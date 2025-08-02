/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
	if (ratings.length === 1) return 1;

	const extraCandy = new Array(ratings.length).fill(0);

	for (let i = 0; i < ratings.length; i++) {
		extraCandy[i] = 1;

		if (i - 1 >= 0 && ratings[i] > ratings[i - 1]) {
			extraCandy[i] = extraCandy[i - 1] + 1;
		}
	}

	for (let i = ratings.length - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1] && extraCandy[i] <= extraCandy[i + 1]) {
			extraCandy[i] = extraCandy[i + 1] + 1;
		}
	}

	return extraCandy.reduce((acc, cur) => acc + cur, 0);
};

const params = [1, 3, 2, 2, 1];

const result = candy(params);

console.log("result!!!", result);
