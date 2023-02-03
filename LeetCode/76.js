/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	let answer = s + "isNo";
	const dict = {};
	let needLength = t.length;

	for (let i = 0; i < t.length; i++) {
		dict[t[i]] = (dict[t[i]] | 0) + 1;
	}

	let j = -1;
	for (let i = 0; i < s.length; i++) {
		while (needLength > 0 && j < s.length) {
			j++;
			if (dict[s[j]] !== undefined) {
				dict[s[j]] = dict[s[j]] - 1;
				if (dict[s[j]] >= 0) {
					needLength--;
				}
			}
		}

		if (needLength <= 0 && j - i + 1 < answer.length) {
			answer = s.slice(i, j + 1);
		}

		if (dict[s[i]] !== undefined) {
			dict[s[i]]++;
			if (dict[s[i]] > 0) {
				needLength++;
			}
		}
	}

	return answer === s + "isNo" ? "" : answer;
};

const S = "bbaac";
const T = "aba";
console.log(minWindow(S, T));
