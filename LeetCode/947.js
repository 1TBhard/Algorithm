/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
	const gy = {};
	const gx = {};

	for (let i = 0; i < stones.length; i++) {
		let [y, x] = stones[i];
		if (gy[y]) {
			gy[y].push(x);
		} else {
			gy[y] = [x];
		}

		if (gx[x]) {
			gx[x].push(y);
		} else {
			gx[x] = [y];
		}
	}

	let answer = 0;
	const visited = new Set();

	for (let stone of stones) {
		let firstKey = `${stone[0]}-${stone[1]}`;

		if (visited.has(firstKey)) continue;

		const q = [stone];

		while (q.length > 0) {
			let [curY, curX] = q.pop();
			let key = `${curY}-${curX}`;

			if (visited.has(key)) continue;
			visited.add(key);
			answer++;

			for (let nextY of gx[curX]) {
				q.push([nextY, curX]);
			}

			for (let nextX of gy[curY]) {
				q.push([curY, nextX]);
			}
		}
		answer--;
	}

	return answer;
};

const TEST = [
	[0, 0],
	[0, 1],
	[1, 0],
	[1, 2],
	[2, 1],
	[2, 2],
];

console.log(removeStones(TEST));
