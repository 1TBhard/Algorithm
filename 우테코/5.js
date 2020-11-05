function solution(num) {
	let limit = 10;
	let answer = 0;

	while (limit < num) {
		answer = answer * 9 + 3 * parseInt(limit / 10);
		limit *= 10;
	}

	limit = parseInt(limit / 10);

	while (limit <= num) {
		var temp = String(limit);

		for (var i = 0; i < temp.length; i++) {
			if (temp[i] === "3" || temp[i] === "6" || temp[i] === "9") answer++;
		}

		limit++;
	}

	return answer;
}

console.log(solution(10000));
