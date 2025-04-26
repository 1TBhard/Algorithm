function solution(picks, minerals) {
	let answer = Number.POSITIVE_INFINITY;

	const tired = [
		[1, 1, 1],
		[5, 1, 1],
		[25, 5, 1],
	];

	const mapMineral = {
		diamond: 0,
		iron: 1,
		stone: 2,
	};

	const getSumTired = ({ currentRound, pickIndex }) => {
		const tiredList = tired[pickIndex];

		let tiredSum = 0;
		for (let i = 0; i < 5 && currentRound + i < minerals.length; i++) {
			const currentTarget = minerals[currentRound + i];
			const currentTargetMineralMapIndex = mapMineral[currentTarget];
			const tired = tiredList[currentTargetMineralMapIndex];
			tiredSum += tired;
		}
		return tiredSum;
	};

	const queue = [{ picks: [...picks], round: 0, tired: 0 }];

	while (queue.length) {
		const { picks, round, tired } = queue.shift();

		if (
			round >= minerals.length ||
			(picks[0] === 0 && picks[1] === 0 && picks[2] === 0)
		) {
			answer = Math.min(answer, tired);
			continue;
		}

		if (picks[0] > 0) {
			queue.push({
				picks: [picks[0] - 1, picks[1], picks[2]],
				round: round + 5,
				tired: tired + getSumTired({ currentRound: round, pickIndex: 0 }),
			});
		}
		if (picks[1] > 0) {
			queue.push({
				picks: [picks[0], picks[1] - 1, picks[2]],
				round: round + 5,
				tired: tired + getSumTired({ currentRound: round, pickIndex: 1 }),
			});
		}
		if (picks[2] > 0) {
			queue.push({
				picks: [picks[0], picks[1], picks[2] - 1],
				round: round + 5,
				tired: tired + getSumTired({ currentRound: round, pickIndex: 2 }),
			});
		}
	}

	return answer;
}

const TEST_LIST = [
	{
		data: [
			[1, 3, 2],
			[
				"diamond",
				"diamond",
				"diamond",
				"iron",
				"iron",
				"diamond",
				"iron",
				"stone",
			],
		],
		expect: 12,
	},
	{
		data: [
			[0, 1, 1],
			[
				"diamond",
				"diamond",
				"diamond",
				"diamond",
				"diamond",
				"iron",
				"iron",
				"iron",
				"iron",
				"iron",
				"diamond",
			],
		],
		expect: 50,
	},
	{
		data: [
			[1, 0, 1],
			[
				"diamond",
				"stone",
				"stone",
				"stone",
				"stone",
				"diamond",
				"diamond",
				"diamond",
				"diamond",
				"diamond",
			],
		],
		expect: 34,
	},
];

TEST_LIST.forEach((test, index) => {
	const result = solution(test.data[0], test.data[1]);
	if (result === test.expect) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
