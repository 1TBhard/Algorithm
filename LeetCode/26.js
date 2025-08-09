/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let duplicatedArr = [nums[0]];
	for (let i = 0; i < nums.length; i++) {
		const lastItem = duplicatedArr[duplicatedArr.length - 1];
		if (nums[i] !== lastItem) {
			duplicatedArr.push(nums[i]);
		}
	}

	for (let j = 0; j < duplicatedArr.length; j++) {
		nums[j] = duplicatedArr[j];
	}

	return duplicatedArr.length;
};

const params = [1, 1, 2];

const result = removeDuplicates(params);

console.log("result!!", result);
