// 뒤에서 부터 올라가는 것으로 풀음
// i 줄에서 i+1 줄 원소의 Max 를 더함
function solution(triangle) {
	let answer = [];

	for (var i = triangle.length - 2; i >= 0; i--) {
		// 이전 줄
		const previous_row = triangle[i + 1];
		for (var j = 0; j < triangle[i].length; j++) {
			// 이전 줄에서 더할 수 있는 목록 중 최대 값을 골라서 더함
			triangle[i][j] += Math.max(previous_row[j], previous_row[j + 1]);
		}
	}

	return triangle[0][0];
}

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
