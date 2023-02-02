// 곱셈이므로 숫자가 정수라면 곱할 수록 커진다.(단 -는 예외)
// 따라서, 카데인의 알고리즘에 의해
// 처음에서 끝, 끝에서 처음으로 곱한 값이 최대이다.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let answer = nums[0];

	let result = 1;
	for (let i = 0; i < nums.length; i++) {
		result = result * nums[i];
		answer = Math.max(result, answer);
		if (result === 0) result = 1;
	}

	result = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result = result * nums[i];
		answer = Math.max(result, answer);
		if (result === 0) result = 1;
	}

	return answer;
};

const NUMS = [0, 2, -1, 4];
console.log(maxProduct(NUMS));
