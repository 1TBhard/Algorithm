/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	const answer = [[]];
	const visited = new Set();

	nums.sort((a, b) => Number(a) - Number(b));

	const recurive = (idx, cur) => {
		const nextList = [...cur, nums[idx]];
		const key = nextList.join(",");

		if (idx >= nums.length) return;

		if (!visited.has(key)) {
			answer.push(nextList);
		}
		visited.add(key);

		recurive(idx + 1, [...cur]);
		recurive(idx + 1, [...nextList]);
	};

	recurive(0, []);

	return answer;
};

const nums = [1, 1, 2, 2];

console.log(subsetsWithDup(nums));
