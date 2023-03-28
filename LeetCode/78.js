/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	const answer = [[]];
	const recurive = (idx, cur) => {
		if (idx >= nums.length) return;

		answer.push([...cur, nums[idx]]);
		recurive(idx + 1, [...cur, nums[idx]]);
		recurive(idx + 1, [...cur]);
	};

	recurive(0, []);

	return answer;
};

const nums = [1, 2, 3];

console.log(subsets(nums));
