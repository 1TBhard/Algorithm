/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	const arr = new Array(num1.length + num2.length).fill(0);

	for (let i = num1.length - 1; i >= 0; i--) {
		for (let j = num2.length - 1; j >= 0; j--) {
			const temp = num1[i] * num2[j] + arr[i + j + 1];
			const carrer = Math.floor(temp / 10);
			const digit = temp % 10;

			arr[i + j + 1] = digit;
			arr[i + j] += carrer;
		}
	}

	while (arr[0] == 0) arr.shift();
	if (arr.length === 0) return "0";
	return arr.join("");
};

console.log(multiply("123", "456"));
