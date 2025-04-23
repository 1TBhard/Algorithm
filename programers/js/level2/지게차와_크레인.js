function solution(storage, requests) {
	const box = storage.map((_) => _.split(""));

	const getAroundAix = () => {
		const arr = [];
		const lastJ = box[0].length - 1;

		for (let i = 0; i < box.length; i++) {
			if (i === 0 || i === box.length - 1) {
				for (let j = 0; j < box[0].length; j++) arr.push([i, j]);
			} else {
				arr.push([i, 0], [i, lastJ]);
			}
		}
		return arr;
	};

	const removeMatchAll = (char) => {
		for (let i = 0; i < box.length; i++) {
			for (let j = 0; j < box[0].length; j++) {
				if (box[i][j] === char) {
					box[i][j] = curRound;
					deleteNum++;
				}
			}
		}
	};

	const getCanGoNextList = (i, j, round, nextTargetChar) => {
		const arr = [
			[i + 1, j],
			[i - 1, j],
			[i, j + 1],
			[i, j - 1],
		];

		return arr.filter(([nextI, nextJ]) => {
			if (nextI < 0 || nextI >= box.length) {
				return false;
			}
			if (nextJ < 0 || nextJ >= box[0].length) {
				return false;
			}
			if (box[nextI][nextJ] === nextTargetChar) return true;

			return box[nextI][nextJ] < round;
		});
	};

	let curRound = 0;
	let deleteNum = 0;

	while (curRound < requests.length) {
		const currentRequest = requests[curRound];

		if (currentRequest.length > 1) {
			removeMatchAll(currentRequest[0]);
		} else {
			const q = getAroundAix();

			while (q.length) {
				const [i, j] = q.shift();
				if (box[i][j] === currentRequest) {
					box[i][j] = curRound;
					deleteNum++;
				} else if (box[i][j] < curRound) {
					box[i][j] = curRound;

					const result = getCanGoNextList(i, j, curRound, currentRequest) || [];

					q.push(...result);
				}
			}
		}

		curRound++;
	}

	return box.length * box[0].length - deleteNum;
}

const TEST_LIST = [
	// {
	// 	data: [
	// 		["AZWQY", "CAABX", "BBDDA", "ACACA"],
	// 		["A", "BB", "A"],
	// 	],
	// 	expect: 11,
	// },
	// {
	// 	data: [
	// 		["HAH", "HBH", "HHH", "HAH", "HBH"],
	// 		["C", "B", "B", "B", "B", "H"],
	// 	],
	// 	expect: 4,
	// },
	// {
	// 	data: [
	// 		["AAA", "ABA", "ABA", "AAA"],
	// 		["BB", "A"],
	// 	],
	// 	expect: 0,
	// },
	// {
	// 	data: [
	// 		["AAA", "ACA", "ABA", "AAA"],
	// 		["BB", "C", "A"],
	// 	],
	// 	expect: 1,
	// },
	// {
	// 	data: [
	// 		["AA", "AA"],
	// 		["BB", "C"],
	// 	],
	// 	expect: 4,
	// },
	{
		data: [["AAAAA", "AAAAA", "AAAAA"], ["AA"]],
		expect: 0,
	},
	// {
	// 	data: [["AAAAA", "AAAAA", "AAAAA"], ["BB"]],
	// 	expect: 15,
	// },
];

TEST_LIST.forEach((test, index) => {
	const result = solution(...test.data);
	if (result === test.expect) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
