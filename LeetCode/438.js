/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	let answer = [];

	if (s.length < p.length) {
		return [];
	}

	const pHash = {};
	p.split("").forEach((word) => {
		pHash[word] = (pHash[word] | 0) + 1;
	});

	let curHash = {};
	for (let i = 0; i < p.length; i++) {
		curHash[s[i]] = (curHash[s[i]] | 0) + 1;
	}

	const isRight = () => {
		let flag = true;

		for (let key of Object.keys(curHash)) {
			if (curHash[key] > 0 && curHash[key] !== pHash[key]) {
				flag = false;
				break;
			}
		}

		return flag;
	};

	for (let j = 0; j <= s.length - p.length; j++) {
		if (j > 0) {
			curHash[s[j - 1]] = curHash[s[j - 1]] - 1;

			curHash[s[j + p.length - 1]] = (curHash[s[j + p.length - 1]] | 0) + 1;
		}

		if (isRight()) {
			answer.push(j);
		}
	}

	return answer;
};
