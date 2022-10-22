/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let high = nums.length - 1;
	let low = 0;
	let middle = 0;

	while (high >= low) {
		middle = Math.ceil((high + low) / 2);

		if (nums[middle] === target) {
			return middle;
		}

		if (nums[middle] < target) {
			low = middle + 1;
		} else {
			high = middle - 1;
		}
	}
	return -1;
};

const TEST = [2, 5],
	target = 5;

console.log(search(TEST, target));
