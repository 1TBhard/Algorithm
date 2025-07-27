/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
	let result = 0;

	nums = nums.reduce((acc, cur) => {
		return cur !== acc[acc.length - 1] ? [...acc, cur] : acc;
	}, []);

	for (let i = 1; i < nums.length - 1; i++) {
		if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
			result++;
		} else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
			result++;
		}
	}

	return result;
};

let checkPassCallCount = 0;
function checkPass(params, expect) {
	const result = countHillValley(params) === expect;
	console.log(`case ${checkPassCallCount} is ${result ? "✅" : "❌"}`);
	checkPassCallCount++;
}

checkPass([2, 4, 1, 1, 6, 5], 3);
checkPass([6, 6, 5, 5, 4, 1], 0);
checkPass([1, 1, 1, 1, 1, 1, 1, 57, 57, 57, 50, 50, 50, 50, 22, 22, 22, 86], 2);
