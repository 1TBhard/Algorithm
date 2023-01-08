/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
	const dict = {};
	const sameDict = {};
	let answer = 0;

	words.forEach((word) => {
		if (word[0] === word[1]) {
			sameDict[word] = (sameDict[word] | 0) + 1;
			return;
		}

		const reverseWord = word[1] + word[0];
		if (dict[reverseWord]) {
			dict[reverseWord] = (dict[reverseWord] | 0) - 1;
			answer += 4;
		} else {
			dict[word] = (dict[word] | 0) + 1;
		}
	});

	let flag = true;
	Object.keys(sameDict).forEach((key) => {
		if (sameDict[key] > 1) {
			answer += Math.floor(sameDict[key] / 2) * 2 * 2;
			sameDict[key] = sameDict[key] % 2;
		}

		if (flag && sameDict[key] === 1) {
			answer += sameDict[key] * 2;
			flag = false;
		}
	});

	return answer;
};

const test = [
	"dd",
	"aa",
	"bb",
	"dd",
	"aa",
	"dd",
	"bb",
	"dd",
	"aa",
	"cc",
	"bb",
	"cc",
	"dd",
	"cc",
];
console.log(longestPalindrome(test));
