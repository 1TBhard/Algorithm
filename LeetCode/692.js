/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
	const dict = {};

	words.forEach((word) => {
		dict[word] = (dict[word] | 0) + 1;
	});

	const soredKeys = Object.keys(dict).sort((akey, bkey) => {
		if (dict[bkey] === dict[akey]) return akey > bkey ? 1 : -1;
		else return dict[bkey] - dict[akey];
	});

	return soredKeys.slice(0, k);
};

const TEST = ["i", "love", "leetcode", "i", "love", "coding"];
const K = 2;

console.log(topKFrequent(TEST, K));
