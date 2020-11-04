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

	// [[정점 번호, 거리]]
	let q = [[1, 0]];
	let visited = new Set();
	let mostDist = 0;

	// bfs
	while (q.length > 0) {
		const [num, dist] = q.shift();

		// 방문했거나 다음 노드가 없는경우
		if (visited.has(num) || graph[num] === undefined) continue;

		visited.add(num);

		if (dist > mostDist) {
			mostDist = dist;
			answer = [num];
		} else if (dist === mostDist) {
			answer.push(num);
		}

		// 다음 [정점, 거리]
		const nextVertexs = graph[num].map((el) => [el, dist + 1]);
		q = [...q, ...nextVertexs];
	}

	return answer.length;
}
