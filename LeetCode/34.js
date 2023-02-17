// var searchRange = function (nums, target) {
// 	const answer = [];

// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === target) answer.push(i);
// 	}

// 	if (answer.length === 0) {
// 		return [-1, -1];
// 	}

// 	return [answer[0], answer[answer.length - 1]];
// };

// 더 빠른 방법 처음과 끝을 보면서 반복한다.

var searchRange = function (nums, target) {
	let i = 0;
	let j = nums.length - 1;

	const answer = [];

	while (i <= j) {
		if (nums[i] === target) {
			answer.push(i);
		}

		if (nums[j] === target) {
			answer.push(j);
		}

		i++;
		j--;
	}

	answer.sort((a, b) => a - b);

	if (answer.length >= 2) return [answer[0], answer[answer.length - 1]];
	if (answer.length === 1) return [answer[0], answer[0]];
	if (answer.length === 0) return [-1, -1];
};

const NUMS = [5, 7, 7, 8, 8, 10];
const TARGET = 8;

console.log(searchRange(NUMS, TARGET));
