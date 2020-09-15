/*
n: 진법
t: 미리 구할 개수
m: 총인원
p: 자기순서
*/

function solution(n, t, m, p) {
	var answer = "";

	let list = "";
	let num = 0;
	while (list.length < m * t + p) {
		list += num.toString(n);
		num++;
	}

	for (var i = 0; i < t; i++) {
		answer += list[i * m + p - 1];
	}

	return answer.toUpperCase();
}

solution(2, 4, 2, 1);
