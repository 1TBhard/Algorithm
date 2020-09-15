function solution(n) {
	let [t1, t2, answer] = [1, 1, 2];

	for (var i = 1; i < n - 1; i++) {
		t1 = t2;
		t2 = answer;
		answer = (t1 + t2) % 1234567;
	}

	if (n == 1) answer = 1;

	return answer;
}

solution(3);
