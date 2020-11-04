// 시간 초과
function solution(n, edge) {
	var answer = [];

	let graph = new Object();

	// 그래프 만들기, 그래프가 양방향을 주의
	for (var [start, end] of edge) {
		if (graph[start] === undefined) graph[start] = [end];
		else graph[start].push(end);

		if (graph[end] === undefined) graph[end] = [start];
		else graph[end].push(start);
	}

	const keys = Object.keys(graph);

	// 정점 번호
	let q = [1];
	let visited = new Array(n + 1).fill(false);

	// bfs
	while (q.length > 0) {
		answer = q.length;
		for (var i = 0; i < answer; i++) {
			const num = q.shift();

			visited[num] = true;

			// visited와 q 에 없는 경우만 넣음
			const nextNode = graph[num].filter(
				(el) => !visited[el] && !q.includes(el)
			);

			q = q.concat(nextNode);
		}
	}

	return answer;
}

solution(6, [
	[3, 6],
	[4, 3],
	[3, 2],
	[1, 3],
	[1, 2],
	[2, 4],
	[5, 2],
]);
