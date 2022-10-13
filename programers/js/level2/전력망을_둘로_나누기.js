function solution(n, wires) {
	var answer = n;

	for (let i = 0; i < wires.length; i++) {
		const activeWireList = [
			...wires.slice(0, i),
			...wires.slice(i + 1, wires.length),
		];
		const graph = {};

		for (let [v1, v2] of activeWireList) {
			if (graph[v1]) graph[v1] = [...graph[v1], v2];
			else graph[v1] = [v2];

			if (graph[v2]) graph[v2] = [...graph[v2], v1];
			else graph[v2] = [v1];
		}

		let q = [activeWireList[0][0]];
		let visited = new Set();

		while (q.length > 0) {
			let node = q.shift();

			if (visited.has(node)) continue;

			visited.add(node);

			let nextList = graph[node].reduce(
				(acc, cur) => (visited.has(cur) ? acc : [...acc, cur]),
				[]
			);

			q.push(...nextList);
		}
		answer = Math.min(answer, Math.abs(n - visited.size * 2));
	}

	return answer;
}

const test = [
	[1, 3],
	[2, 3],
	[3, 4],
	[4, 5],
	[4, 6],
	[4, 7],
	[7, 8],
	[7, 9],
];
const n = 9;

console.log(solution(n, test));
