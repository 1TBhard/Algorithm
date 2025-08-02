/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	const maxLen = Math.max(word1.length, word2.length);

	let answer = "";
	for (let i = 0; i < maxLen; i++) {
		if (i < word1.length) answer += word1[i];
		if (i < word2.length) answer += word2[i];
	}

	return answer;
};
