/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
	let str = "";
	while (n > 0) {
		const result = n % 3;

		if (result === 2) {
			return false;
		}

		str += result;

		n = Math.floor(n / 3);
	}

	return true;
};

function checkAnswer(n, expect) {
	const result = checkPowersOfThree(n) === expect;
	console.log(`n=${n} is ${result ? "pass" : "fail"}`);
}

checkAnswer(12, true);
checkAnswer(91, true);
checkAnswer(21, false);

checkAnswer(6064310, true);
checkAnswer(6717583, true);
checkAnswer(9440683, true);
checkAnswer(8737543, true);
checkAnswer(9077841, true);
checkAnswer(4087209, true);
checkAnswer(2086499, true);
