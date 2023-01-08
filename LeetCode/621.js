// 최대 rest 숫자로 시작해 rest 를 줄여가면서 푼다.
// asnwer = tasks.length + rest

var leastInterval = function (tasks, n) {
	const dict = {};

	tasks.forEach((task) => {
		dict[task] = (dict[task] | 0) + 1;
	});

	// 가장 많은 char 순으로 정렬한 key List
	const sortedKey = Object.keys(dict).sort((a, b) => dict[b] - dict[a]);

	// 가장 빈번한 char의 개수
	const maxFrequentCharNums = dict[sortedKey[0]];

	// 최대 휴식 수
	let maxRest = (maxFrequentCharNums - 1) * n;

	for (let key of sortedKey.slice(1, sortedKey.length)) {
		let nums = 0;

		// 정렬해도 maxFrequentCharNums === dict[key] 인 경우
		if (maxFrequentCharNums === dict[key]) {
			nums = dict[key] - 1;
		} else {
			nums = dict[key];
		}

		// -방지
		maxRest = Math.max(0, maxRest - nums);
	}

	return tasks.length + maxRest;
};

const TASKS = ["A", "A", "A", "B", "B", "B"];
const N = 0;

console.log(leastInterval(TASKS, N));
