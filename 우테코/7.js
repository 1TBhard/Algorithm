function solution(str) {
	let stack = [];

	for (var i = 0; i < str.length; i++) {
		if (stack[stack.length - 1] === str[i]) {
			stack.pop();
		} else stack.push(str[i]);
	}

	return stack.join("");
}

console.log(solution("zyelleyz"));
