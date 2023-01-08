/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
	let neg = 0;
	let pos = 0;

	nums.forEach((num) => {
		if (num > 0) {
			pos++;
		} else if (num < 0) {
			neg++;
		}
	});

	return Math.max(pos, neg);
};

const TEST = [5, 20, 66, 1314];

console.log(maximumCount(TEST));
