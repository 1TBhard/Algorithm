function solution(book_time) {
	const toMinute = (timeString) => {
		const [hour, min] = timeString.split(":");
		return Number(hour) * 60 + Number(min);
	};

	const dataList = book_time.map((item) => {
		const start = toMinute(item[0]);
		const end = toMinute(item[1]);
		return [start, end + 10];
	});

	dataList.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		return a[0] - b[0];
	});

	const queue = [];
	for (let [start, end] of dataList) {
		let flag = false;
		for (let i = 0; i < queue.length; i++) {
			if (start >= queue[i]) {
				queue[i] = end;
				flag = true;
				break;
			}
		}
		if (!flag) {
			queue.push(end);
		}
	}

	return queue.length;
}

const TEST_LIST = [
	{
		data: [
			["15:00", "17:00"],
			["16:40", "18:20"],
			["14:20", "15:20"],
			["14:10", "19:20"],
			["18:20", "21:20"],
		],
		expect: 3,
	},
	{
		data: [
			["09:10", "10:10"],
			["10:20", "12:20"],
		],
		expect: 1,
	},
	{
		data: [
			["10:20", "12:30"],
			["10:20", "12:30"],
			["10:20", "12:30"],
		],
		expect: 3,
	},
	{
		data: [
			["09:00", "10:00"],
			["09:00", "11:00"],
			["13:30", "20:00"],
			["10:30", "14:00"],
			["11:30", "13:00"],
			["16:30", "19:30"],
		],
		expect: 2,
	},
	{
		data: [
			["10:50", "11:10"],
			["10:20", "10:40"],
			["10:00", "10:10"],
		],
		expect: 1,
	},
];

TEST_LIST.forEach((test, index) => {
	const result = solution(test.data);
	if (result === test.expect) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
