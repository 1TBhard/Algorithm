function solution(routes) {
	var answer = 1;

	routes.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		else return a[0] - b[0];
	});

	var cur = routes[0];

	for (var i = 1; i < routes.length; i++) {
		var [start, end] = routes[i];

		if (start > cur[1]) {
			cur = routes[i];
			answer++;
		} else {
			cur[0] = Math.max(start, cur[0]);
			cur[1] = Math.min(end, cur[1]);
		}
	}

	return answer;
}

solution([
	[-3, 1],
	[-2, 2],
	[0, 1],
	[-4, 5],
]);
