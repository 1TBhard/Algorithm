function solution(targets) {
	targets.sort((a, b) => {
		return a[1] - b[1];
	});

	let curMaxStart = -1;
	let answer = 0;

	for (let i = 0; i < targets.length; i++) {
		const [start, end] = targets[i];
		if (curMaxStart <= start) {
			curMaxStart = end;
			answer++;
		}
	}

	return answer;
}

const TEST_LIST = [
	// {
	// 	data: [
	// 		[4, 5],
	// 		[4, 8],
	// 		[10, 14],
	// 		[11, 13],
	// 		[5, 12],
	// 		[3, 7],
	// 		[1, 4],
	// 	],
	// 	expect: 3,
	// },
	// {
	// 	data: [[0, 1]],
	// 	expect: 1,
	// },
	{
		data: [
			[4, 5],
			[1, 2],
			[0, 1],
			[2, 3],
			[0, 5],
		],
		expect: 4,
	},
	{
		data: [
			[0, 1],
			[0, 1],
			[0, 1],
			[0, 1],
		],
		expect: 1,
	},
	{
		data: [
			[1, 5],
			[2, 6],
			[3, 7],
			[4, 8],
			[5, 8],
		],
		expect: 2,
	},
	{
		data: [
			[0, 1],
			[1, 2],
			[0, 2],
		],
		expect: 2,
	},
	{
		data: [
			[0, 4],
			[0, 1],
			[2, 3],
		],
		expect: 2,
	},
	{
		data: [
			[0, 4],
			[1, 2],
			[1, 3],
			[3, 4],
		],
		expect: 2,
	},
];

TEST_LIST.forEach((test, index) => {
	const result = solution(test.data);
	const isClear = result === test.expect;
	if (isClear) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
