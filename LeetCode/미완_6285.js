/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
	const maxArr = nums.sort((a, b) => b - a);

	let answer = 0;

	for (let i = 0; i < k; i++) {
		answer += maxArr[0];

		const changedMaxNum = Math.ceil(maxArr.shift() / 3);

		let j = 0;
		for (; j < nums.length; j++) {
			if (changedMaxNum > maxArr[j]) {
				break;
			}
		}
		maxArr.splice(j, 0, changedMaxNum);
	}

	return answer;
};

const arr = [1, 5, 7, 98];
const k = 2;

console.log(maxKelements(arr, k));
