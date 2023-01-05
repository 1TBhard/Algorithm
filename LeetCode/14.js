/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let answer = strs[0];

	for (let word of strs.slice(1, strs.length)) {
		for (let j = 0; j < word.length; j++) {
			if (word[j] !== answer[j]) {
				answer = answer.slice(0, j);
				break;
			}
		}
		if (answer.length > word.length) {
			answer = answer.slice(0, word.length);
		}
	}

	return answer;
};

const TEST = ["ab", "a"];

longestCommonPrefix(TEST);
