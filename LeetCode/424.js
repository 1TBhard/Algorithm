/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let answer = 1;

	const hashmap = {};

	let i = 0,
		j = 1;

	const check = () => {
		const keys = Object.keys(hashmap);

		keys.sort((a, b) => hashmap[a] - hashmap[b]);

		let anotherNums = 0;

		for (let leftWordNums of keys.slice(0, keys.length - 1)) {
			anotherNums += hashmap[leftWordNums];
		}

		return anotherNums - k <= 0;
	};

	const minusHashmap = (index) => {
		hashmap[s[index]] = hashmap[s[index]] - 1;
	};

	const plusHashmap = (index) => {
		hashmap[s[index]] = (hashmap[s[index]] | 0) + 1;
	};

	plusHashmap(0);

	// j는 1씩 무조건 증가
	while (j < s.length) {
		plusHashmap(j);

		if (check()) {
			answer = Math.max(answer, j - i + 1);
		} else {
			minusHashmap(i);
			i++;
		}
		j++;
	}

	return answer;
};

characterReplacement("ABAA", 0);
