function solution(diffs, times, limit) {
	const getTime = (level, curDiff, curTime, prevDiffTime) => {
		const result = level - curDiff;
		return result < 0
			? Math.abs(result) * (prevDiffTime + curTime) + curTime
			: curTime;
	};

	const getTimeByLevel = (level) => {
		return diffs.reduce(
			(acc, curDiff, index) =>
				acc +
				getTime(level, curDiff, times[index], index > 0 ? times[index - 1] : 0),
			0
		);
	};

	let minAnswer = 1;
	let maxAnser = 100000;

	while (minAnswer <= maxAnser) {
		const middleAnswer = Math.floor((minAnswer + maxAnser) / 2);
		const sumTime = getTimeByLevel(middleAnswer);

		if (sumTime > limit) {
			minAnswer = middleAnswer + 1;
		} else {
			maxAnser = middleAnswer - 1;
		}
	}

	return minAnswer;
}

const TEST_LIST = [
	{
		data: [[1, 5, 3], [2, 4, 7], 30],
		expect: 3,
	},
	{
		data: [[1, 4, 4, 2], [6, 3, 8, 2], 59],
		expect: 2,
	},
	{
		data: [[1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723],
		expect: 294,
	},
	{
		data: [[1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012],
		expect: 39354,
	},
	{
		data: [[1, 1, 3], [1, 1, 3], 50],
		expect: 1,
	},
];

TEST_LIST.forEach((test, index) => {
	const result = solution(test.data[0], test.data[1], test.data[2]);
	const isClear = result === test.expect;
	if (isClear) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
