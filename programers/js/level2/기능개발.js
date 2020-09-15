function solution(progresses, speeds) {
	let answer = [1];

	for (var i = 0; i < progresses.length; i++) {
		progresses[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
	}

	let max_value = progresses[0];
	let j = 0;

	for (var i = 1; i < progresses.length; i++) {
		if (progresses[i] > max_value) {
			max_value = progresses[i];
			answer.push(1);
			j++;
		} else {
			answer[j]++;
		}
	}

	return answer;
}

solution([93, 30, 55], [1, 30, 5]);
