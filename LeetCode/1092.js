var shortestCommonSupersequence = function (str1, str2) {
	const dp = Array.from(Array(str1.length + 1).fill(0), () =>
		Array(str2.length + 1).fill(0)
	);

	for (let i = 0; i < dp.length; i++) {
		dp[i][0] = i;
	}

	for (let j = 0; j < dp[0].length; j++) {
		dp[0][j] = j;
	}

	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[0].length; j++) {
			if (str1[i - 1] === str2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
			}
		}
	}

	const answer = [];

	let i = dp.length,
		j = dp[0].length;

	while (i >= 1 && j >= 1) {
		if (str1[i - 1] === str2[j - 1]) {
			answer.push(str1[i - 1]);
			i--;
			j--;
		} else if (dp[i - 1][j] < dp[i][j - 1]) {
			answer.push(str1[i - 1]);
			i--;
		} else {
			answer.push(str2[j - 1]);
			j--;
		}
	}

	while (i > 0) {
		answer.push(str1[i - 1]);
		i--;
	}

	while (j > 0) {
		answer.push(str2[j - 1]);
		j--;
	}

	// revers 해준다.
	return answer.reverse().join("");
};

function checkIsAnswer({ str1, str2, expect }) {
	const result = shortestCommonSupersequence(str1, str2);
	console.log(`answer is ${result === expect ? "pass" : "fail: " + result}`);
}

// checkIsAnswer({
// 	str1: "gbcdfe",
// 	str2: "abcdef",
// 	expect: "bcdf",
// });

checkIsAnswer({
	str1: "abac",
	str2: "cab",
	expect: "cabac",
});

// checkIsAnswer({
// 	str1: "aaaaaaaa",
// 	str2: "aaaaaaaa",
// 	expect: "aaaaaaaa",
// });

// checkIsAnswer({
// 	str1: "bbbaaaba",
// 	str2: "bbababbb",
// 	expect: "bbbaaababbb",
// });
