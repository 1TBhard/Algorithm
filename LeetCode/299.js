/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
	// nothingDic[] > 0 이면 secret에 있지만 guess 에 없는 값
	const nothingDic = {};
	let bulls = 0;
	let nothing = 0;

	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) {
			bulls++;
		} else {
			nothingDic[guess[i]] = (nothingDic[guess[i]] | 0) - 1;
			nothingDic[secret[i]] = (nothingDic[secret[i]] | 0) + 1;
		}
	}

	Object.keys(nothingDic).forEach((key) => {
		if (nothingDic[key] > 0) nothing += nothingDic[key];
	});

	let cows = secret.length - bulls - nothing;

	return `${bulls}A${cows}B`;
};

getHint("1123", "0111");
