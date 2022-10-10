var isIsomorphic = function (s, t) {
	const changedChar = {};
	const alreadyIn = {};

	for (let i = 0; i < s.length; i++) {
		let fromChar = s[i];
		let toChar = t[i];

		if (changedChar[fromChar] && changedChar[fromChar] !== toChar) {
			return false;
		}

		if (alreadyIn[toChar] && alreadyIn[toChar] !== fromChar) {
			return false;
		}

		changedChar[fromChar] = toChar;
		alreadyIn[toChar] = fromChar;
	}

	return true;
};

console.log(isIsomorphic("paper", "title"));
