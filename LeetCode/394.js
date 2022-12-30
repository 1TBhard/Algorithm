// [] 를 substring 으로 나누어 재귀반복

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	const isNumber = (str) => !Number.isNaN(Number(str));

	const addIterateStr = (str, iterNum) => {
		let result = "";

		for (let k = 0; k < iterNum; k++) {
			result += str;
		}

		return result;
	};

	const findCloseBrackIndex = (index, str) => {
		const stack = [];

		for (let j = index + 1; j < str.length; j++) {
			if (str[j] === "[") {
				stack.push("[");
			} else if (stack.length === 0 && str[j] === "]") {
				return j;
			} else if (str[j] === "]") {
				stack.pop();
			}
		}
	};

	const resursive = (str) => {
		let temp = "";
		let iterNum = 0;

		for (let i = 0; i < str.length; i++) {
			if (isNumber(str[i])) {
				iterNum = iterNum * 10 + Number(str[i]);
			} else if (str[i] === "[") {
				const closingBracketIndex = findCloseBrackIndex(i, str);
				const bracketStr = resursive(str.slice(i + 1, closingBracketIndex));

				temp = temp + addIterateStr(bracketStr, iterNum);
				iterNum = 0;

				i = closingBracketIndex;
			} else {
				temp += str[i];
			}
		}

		return temp;
	};

	return resursive(s);
};

const TEST = "2[abc]3[cd]ef";
console.log(decodeString(TEST));
