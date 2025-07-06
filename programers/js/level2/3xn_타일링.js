function solution(n) {
	const dp = new Array(n + 1).fill(0);

	dp[2] = 3;
	dp[4] = 11;

	for (let i = 6; i <= n; i += 2) {
		dp[i] = dp[i - 2] * dp[2];
		for (let j = 4; i - j > 0; j += 2) {
			dp[i] += dp[i - j] * 2;
		}
		dp[i] = (dp[i] + 2) % 1_000_000_007;
	}

	return dp[n];
}

const TEST_LIST = [
	{
		expect: 3,
	},
	{
		data: 4,
		expect: 11,
	},
	{
		data: 6,
		expect: 41,
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
