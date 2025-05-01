function solution(msg) {
	const answer = [];

	let curIndex = 1;

	const hashMap = {};

	for (let i = 65; i < 65 + 26; i++) {
		hashMap[String.fromCharCode(i)] = curIndex;
		curIndex += 1;
	}

	let answerChar = "";

	for (let i = 0; i < msg.length; i++) {
		answerChar = answerChar + msg[i];
		const num = hashMap[answerChar];

		const addChar = i + 1 < msg.length ? answerChar + msg[i + 1] : answerChar;

		if (!hashMap[addChar]) {
			answer.push(num);
			answerChar = "";

			hashMap[addChar] = curIndex;
			curIndex++;
			continue;
		}
	}

	if (answerChar.length) {
		answer.push(hashMap[answerChar]);
	}

	return answer;
}

const TEST_LIST = [
	{
		data: "KAKAO",
		expect: [11, 1, 27, 15],
	},
	{
		data: "TOBEORNOTTOBEORTOBEORNOT",
		expect: [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34],
	},
	{
		data: "ABABABABABABABAB",
		expect: [1, 2, 27, 29, 28, 31, 30],
	},
];

const isSameArray = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	return arr1.every((item, index) => item === arr2[index]);
};

TEST_LIST.forEach((test, index) => {
	const result = solution(test.data);
	const isClear = isSameArray(result, test.expect);
	if (isClear) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
