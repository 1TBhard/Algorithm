var findCircleNum = function (isConnected) {
	const g = {};

	for (let i = 0; i < isConnected.length; i++) {
		g[i] = [];
		for (let j = 0; j < isConnected[i].length; j++) {
			if (isConnected[i][j] === 1) {
				g[i].push(j);
			}
		}
	}

	let answer = 0;

	let visited = new Array(isConnected[0].length).fill(false);

	while (visited.some((_) => _ === false)) {
		const startV = visited.findIndex((visit) => !visit);

		let q = [startV];
		visited[visited] = true;

		while (q.length > 0) {
			let curV = q.pop();

			g[curV].forEach((nextV) => {
				if (visited[nextV]) return;

				visited[nextV] = true;
				q.push(nextV);
			});
		}

		answer++;
	}

	return answer;
};

const TEST = [
	[1, 1, 0],
	[1, 1, 0],
	[0, 0, 1],
];

console.log(findCircleNum(TEST));
