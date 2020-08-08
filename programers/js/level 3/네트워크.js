function solution(n, computers) {
	var answer = 0;
	let visted = new Array(n).fill(false);

	while (!visted.every((pass) => pass)) {
		let q = Array(1).fill(visted.indexOf(false));
		while (q.length > 0) {
			let num = q.shift();

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
