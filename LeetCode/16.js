/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums.sort((a, b) => a - b);

	// 고르는 경우 최대: 1000씩 3개 고를때
	let answer = nums[0] + nums[1] + nums[2];

	// num[i] 는 1번째로 고른 수
	for (let i = 0; i < nums.length - 2; i++) {
		let start = i + 1;
		let end = nums.length - 1;

		while (start < end) {
			let sum = nums[i] + nums[start] + nums[end];

			if (sum === target) {
				return sum;
			}

			answer =
				Math.abs(answer - target) > Math.abs(sum - target) ? sum : answer;

			if (sum < target) {
				start++;
			} else if (sum > target) {
				end--;
			}
		}
	}

	return answer;
};

const NUMS = [-1, 2, 1, -4];
const TARGET = 1;
console.log(threeSumClosest(NUMS, TARGET));
