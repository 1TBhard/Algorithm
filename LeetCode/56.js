/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

	const answer = [];
	let newInterval = intervals[0];
	for (let i = 1; i < intervals.length; i++) {
		if (newInterval[1] >= intervals[i][0]) {
			newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
		} else {
			answer.push(newInterval);
			newInterval = intervals[i];
		}
	}

	if (
		answer.length === 0 ||
		answer[answer.length - 1][1] !== intervals[intervals.length - 1][1]
	) {
		answer.push(newInterval);
	}

	return answer;
};

const TEST = [
	[1, 4],
	[2, 3],
];

console.log(merge(TEST));
