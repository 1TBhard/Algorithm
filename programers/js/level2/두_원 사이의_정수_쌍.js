// 접근법 1 사분면의 점의 개수를 구하고 * 4를 해서 구한다.
// 단, r1 이 0 일 경우 조심한다. +1

function solution(r1, r2) {
	let result = r2 - r1 + 1;

	for (let i = 1; i <= r2; i++) {
		const maxY = Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
		const minY = i < r1 ? Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)) : 1;

		result += maxY - minY + 1;
	}

	result = result * 4;

	return result;
}

const TEST_LIST = [
	{
		data: [2, 3],
		expect: 20,
	},
	{
		data: [1, 2],
		expect: 12,
	},
	{
		data: [1, 3],
		expect: 28,
	},
];

TEST_LIST.forEach((test, index) => {
	const result = solution(...test.data);
	const isClear = result === test.expect;
	if (isClear) {
		console.log(`테스트 ${index} 통과`);
	} else {
		console.log(`테스트 ${index} 틀림 예상: ${test.expect}, 결과: ${result}`);
	}
});
