function solution(n, computers) {
	var answer = 0;
	let visted = new Array(n).fill(false);

	// dfs 로 해결
	while (!visted.every((pass) => pass)) {
		let q = [visted.indexOf(false)];
		while (q.length > 0) {
			let num = q.pop();

			visted[num] = true;

			computers[num].forEach((item, idx) => {
				if (item === 1 && !visted[idx]) {
					q.push(idx);
				}
			});
		}

		answer++;
	}

	return answer;
}

solution(3, [
	[1, 1, 0],
	[1, 1, 0],
	[0, 0, 1],
]);
