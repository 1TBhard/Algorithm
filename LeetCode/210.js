// 위상정렬

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
	// 들어오는 진입차수
	const arr = Array(numCourses).fill(0);

	const dict = {};

	for (let [after, before] of prerequisites) {
		if (dict[before]) {
			dict[before].push(after);
		} else {
			dict[before] = [after];
		}

		arr[after]++;
	}

	const answer = [];
	const q = [];

	for (let i = 0; i < arr.length; i++) {
		// 진입차수 0인 것을 삽입
		if (arr[i] === 0) {
			q.push(i);
		}
	}

	while (q.length) {
		let curNum = q.shift();
		answer.push(curNum);

		for (let nextNum of dict[curNum] ?? []) {
			arr[nextNum]--;
			if (arr[nextNum] === 0) q.push(nextNum);
		}
	}

	return answer.length === numCourses ? answer : [];
};

const numCourses = 4;
const prerequisites = [
	[1, 0],
	[2, 0],
	[3, 1],
	[3, 2],
];
findOrder(numCourses, prerequisites);
