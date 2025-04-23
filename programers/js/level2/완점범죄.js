function solution(info, n, m) {
	const matrix = Array.from(Array(info.length), () =>
		Array(m).fill(Number.POSITIVE_INFINITY)
	);

	matrix[0][0] = 0;

	for (let i = 1; i < matrix.length; i++) {
		let [aScore, bScore] = info[i - 1];

		for (let j = 0; j < matrix[0].length; j++) {
			// A가 훔치는 경우
			matrix[i][j] = Math.min(matrix[i - 1][j] + aScore, matrix[i][j]);

			// B가 훔치는 경우
			if (j + bScore < m) {
				matrix[i][j + bScore] = Math.min(
					matrix[i - 1][j],
					matrix[i][j + bScore]
				);
			}
		}
	}

	let answer = Number.POSITIVE_INFINITY;

	matrix[info.length - 1].forEach((lastAScore) => {
		if (lastAScore < n) {
			answer = Math.min(lastAScore, answer);
		}
	});

	return answer === Number.POSITIVE_INFINITY ? -1 : answer;
}

const TEST_LIST = [
	{
		data: [
			[
				[1, 2],
				[2, 3],
				[2, 1],
			],
			4,
			4,
			2,
		],
		expect: 2,
	},
	{
		data: [
			[
				[1, 2],
				[2, 3],
				[2, 1],
			],
			1,
			7,
			0,
		],
		expect: 0,
	},
	{
		data: [
			[
				[3, 3],
				[3, 3],
			],
			7,
			1,
			6,
		],
		expect: 6,
	},
	{
		data: [
			[
				[3, 3],
				[3, 3],
			],
			6,
			1,
			-1,
		],
		expect: -1,
	},
];

TEST_LIST.forEach((test, index) => {
	const result = solution(...test.data);
	if (result === test.expect) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
