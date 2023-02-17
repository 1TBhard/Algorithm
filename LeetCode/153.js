/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {
// 	let answer = 0;

// 	for (let i = 0; i < nums.length - 1; i++) {
// 		if (nums[i] > nums[i + 1]) {
// 			answer = i + 1;
// 			break;
// 		}
// 	}

// 	return nums[answer];
// };

// 더 빠른 방법
function findMin(nums) {
	let i = 0;
	let j = nums.length - 1;

	while (i <= j) {
		if (nums[i] > nums[i + 1]) {
			return nums[i + 1];
		}

		if (nums[i] < nums[j]) {
			i++;
		} else {
			j--;
		}
	}

	return nums[0];
}

const NUMS = [11, 13, 15, 17];

console.log(findMin(NUMS));
