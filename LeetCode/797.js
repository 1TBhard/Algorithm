/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
	const q = [[0]];

	let answer = [];

	while (q.length) {
		let curVisited = q.pop();

		let cur = curVisited[curVisited.length - 1];

		if (cur === graph.length - 1) {
			answer.push(curVisited);
			continue;
		}

		let nextList = graph[cur];

		for (let next of nextList) {
			q.push([...curVisited, next]);
		}
	}

	return answer;
};

const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];

console.log(allPathsSourceTarget(graph));
