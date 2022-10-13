function solution(word) {
	let answer = 0;

	const mo = ["A", "E", "I", "O", "U"];

	let flag = false;

	const makeDic = (char) => {
		if (flag || char === word) {
			flag = true;
			return;
		}

		answer++;

		if (char.length >= 5) return;

		for (let i = 0; i < mo.length; i++) {
			makeDic(char + mo[i]);
		}
	};

	makeDic("");

	return answer;
}

console.log(solution("I"));
