/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let answer = 0;

	const visited = new Set();
	let j = 0;
	for (let i = 0; i < s.length; i++) {
		while (visited.has(s[i])) {
			visited.delete(s[j]);
			j++;
		}
		visited.add(s[i]);
		answer = Math.max(i - j + 1, answer);
	}

	return answer;
};

const INPUT = "bbbbb";
console.log(lengthOfLongestSubstring(INPUT));
