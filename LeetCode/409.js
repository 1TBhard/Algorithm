/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let answer = 0;

	let wordDic = {};

	for (let i = 0; i < s.length; i++) {
		wordDic[s[i]] = (wordDic[s[i]] | 0) + 1;
	}

	let flag = false;
	Object.entries(wordDic).map(([_, value]) => {
		if (value % 2 === 0) {
			answer += value;
		} else {
			if (flag) {
				answer += value - 1;
			} else {
				answer += value;
				flag = true;
			}
		}
	});

	return answer;
};

console.log(longestPalindrome("abccccdd"));
