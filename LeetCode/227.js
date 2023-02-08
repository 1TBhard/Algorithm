/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	let numberStr = "";
	let stack = [];
	let beforeSign = null;

	// s.length 까지 가야 마지막 연산자에 대한 연산 수행
	for (let i = 0; i <= s.length; i++) {
		let char = s[i];

		if (char === " ") {
			continue;
		}

		if (!Number.isNaN(Number(char))) {
			numberStr += char;
			continue;
		}

		switch (beforeSign) {
			case "+": {
				stack.push(Number(numberStr));
				break;
			}
			case "-": {
				stack.push(-Number(numberStr));

				break;
			}
			case "*": {
				stack.push(stack.pop() * Number(numberStr));
				break;
			}
			case "/": {
				stack.push(parseInt(stack.pop() / Number(numberStr), 10));
				break;
			}
			case null: {
				stack.push(Number(numberStr));
				break;
			}
		}

		beforeSign = s[i];
		numberStr = "";
	}

	return stack.reduce((acc, cur) => acc + cur, 0);
};

const TEST = "3+2*2";
console.log(calculate(TEST));
