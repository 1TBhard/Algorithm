function solution(n) {
	var answer = [1, 1];

	for (var i = 1; i < n; i++) {
		answer.push(answer[answer.length - 2] + answer[answer.length - 1]);
	}

	console.log(answer);

	return answer[answer.length - 1] % 1000000007;
}

solution(5);
