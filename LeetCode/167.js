/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let startIdx = 0;
	let endIdx = numbers.length - 1;

	while (startIdx < endIdx) {
		const result = numbers[startIdx] + numbers[endIdx];

		if (result < target) {
			startIdx++;
		} else if (result > target) {
			endIdx--;
		} else {
			break;
		}
	}

	return [startIdx + 1, endIdx + 1];
};

const params = [2, 7, 11, 15];
const result = twoSum(params, 9);
