/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let temp = n;
	const alreadyIn = new Set();

	while (temp > 1) {
		let next = 0;

		while (temp > 0) {
			next += Math.floor(temp % 10) ** 2;
			temp = Math.floor(temp / 10);
		}

		if (alreadyIn.has(next)) break;

		temp = next;
		alreadyIn.add(temp);
	}

	if (temp === 1) return true;
	else return false;
};

console.log(isHappy(19));
