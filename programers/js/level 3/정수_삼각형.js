function solution(triangle) {
	var pool = triangle[triangle.length - 1];

	for (var i = triangle.length - 2; i >= 0; i--) {
		pool = triangle[i].map(
			(item, idx) => item + Math.max(pool[idx], pool[idx + 1])
		);
	}

	return pool[0];
}

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
