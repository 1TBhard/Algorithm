function solution(money) {
	const m_list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

	const answer = Array(m_list.length).fill(0);

	for (var i = 0; i < m_list.length; i++) {
		answer[i] = parseInt(money / m_list[i]);
		money = parseInt(money % m_list[i]);
	}

	console.log(answer);

	return answer;
}

solution(50237);
solution(15000);
solution(101);
