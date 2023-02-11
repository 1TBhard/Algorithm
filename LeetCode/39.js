/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	candidates.sort((a, b) => a - b);

	const answer = [];
	const firstItem = [[], 0];
	const q = [firstItem];

	while (q.length) {
		let [arr, curSum] = q.pop();

		for (let item of candidates) {
			if (item < arr[arr.length - 1]) continue;
			let nextArr = [...arr, item];
			let nextSum = item + curSum;

			if (nextSum < target) {
				q.push([nextArr, nextSum]);
			} else if (nextSum === target) {
				answer.unshift(nextArr);
			}
		}
	}

	return answer;
};

const TEST = [2, 3, 5];
const TARGET = 8;

console.log(combinationSum(TEST, TARGET));
