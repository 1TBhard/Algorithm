/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const answer = [];
	const q = [];

	for (let i = 0; i < nums.length; i++) {
		let visited = new Array(nums.length).fill(false);
		visited[i] = true;
		q.push([[nums[i]], [...visited]]);
	}

	while (q.length) {
		let [cur, visited] = q.pop();

		if (cur.length === nums.length) {
			answer.unshift(cur);
			continue;
		}

		for (let i = 0; i < nums.length; i++) {
			if (visited[i]) continue;
			let copyedVisitd = [...visited];
			copyedVisitd[i] = true;
			q.push([[...cur, nums[i]], [...copyedVisitd]]);
		}
	}

	return answer;
};

const TEST = [1, 2, 3];

console.log(permute(TEST));
