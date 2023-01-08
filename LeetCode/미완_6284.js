/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
	const dic_1 = {};
	const dic_2 = {};
	const maxLen = Math.max(word1.length, word2.length);

	for (let i = 0; i < maxLen; i++) {
		dic_1[word1[i]] = (dic_1[word1[i]] | 0) + 1;
		dic_2[word1[i]] = (dic_2[word1[i]] | 0) - 1;
	}

	for (let j = 0; j < word2.length; j++) {
		dic_2[word2[j]] = (dic_2[word2[j]] | 0) + 1;
		dic_1[word2[j]] = (dic_1[word2[j]] | 0) - 1;
	}

	let temp1 = 0;
	for (let char of Object.keys(dic_1)) {
		if (dic_1[char] < 0) {
			temp1++;
		}
	}

	let temp2 = 0;
	for (let char of Object.keys(dic_2)) {
		if (dic_2[char] < 0) {
			temp2++;
		}
	}

	return Math.abs(temp1 - temp2) <= 1;
};

const test1 = "ac";
const test2 = "b";

console.log(isItPossible(test1, test2));
