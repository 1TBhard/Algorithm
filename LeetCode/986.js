/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	const answer = [];

	let i = 0,
		j = 0;

	while (i < firstList.length && j < secondList.length) {
		let [s1, e1] = firstList[i];
		let [s2, e2] = secondList[j];

		let maxStart = Math.max(s1, s2);
		let minEnd = Math.min(e1, e2);

		if (maxStart <= minEnd) answer.push([maxStart, minEnd]);

		if (e1 < e2) i++;
		else j++;
	}

	return answer;
};

const F = [
	[0, 2],
	[5, 10],
	[13, 23],
	[24, 25],
];

const S = [
	[1, 5],
	[8, 12],
	[15, 24],
	[25, 26],
];

console.log(intervalIntersection(F, S));
