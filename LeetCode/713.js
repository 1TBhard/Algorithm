/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	let i = 0;
	let j = 0;
	let answer = 0;

	let productRes = 1;

	while (i < nums.length) {
		productRes *= nums[i];

		while (productRes >= k) {
			productRes /= nums[j];
			j++;
		}

		if (productRes < k) {
			answer += i - j + 1;
		}

		i++;
	}

	return answer;
};

const NUMS = [10, 5, 2, 6];
const K = 100;

console.log(numSubarrayProductLessThanK(NUMS, K));
