function solution(routes) {
	var answer = 1;

	// 진입 지점 빠를 수록 우선으로 정렬
	routes.sort((a, b) => a[0] < b[0]);

	// 가장 큰 범위
	let [big_start, big_end] = routes[0];

	// 차량 지점들만 있는 배열
	for (var i = 1; i < routes.length; i++) {
		let [cur_start, cur_end] = routes[i];

		if (big_end < cur_start) {
			big_start = cur_start;
			big_end = cur_end;
			answer++;
			continue;
		}

		if (big_end > cur_end) {
			big_end = cur_end;
		}

		// 이미 진입점 순으로 정렬했기 때문에 현재 출발점은 big_start 보다 큼
		big_start = cur_start;
	}

	console.log(answer);
	return answer;
}

solution([
	[-20, 15],
	[-14, -5],
	[-18, -13],
	[-5, -3],
]);
