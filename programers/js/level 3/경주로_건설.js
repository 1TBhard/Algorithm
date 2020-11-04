// 큐에 넣는 다음 길은 가격이 작은 경우를 우선해서 넣음
// 코너 비용은 +100 + 500

function solution(board) {
	let q = [
		["H", 0, 0, 0],
		["V", 0, 0, 0],
	];

	const canGo = (y, x) => {
		if (board[y] === undefined) return false;

		const next_move = board[y][x];

		if (next_move === undefined || next_move === 1) return false;

		return true;
	};

	// dfs도 해봤지만 bfs가 더 빠름
	// bfs를 사용
	while (q.length > 0) {
		const [status, y, x, bill] = q.shift();

		// 방문한 지역이 bill이 더 작은 경우, 대신 1보다 커야함
		if (board[y][x] > 1 && board[y][x] < bill) {
			continue;
		}

		// 최저가 갱신
		board[y][x] = bill;

		const goUp = canGo(y - 1, x);
		const goDown = canGo(y + 1, x);
		const goLeft = canGo(y, x - 1);
		const goRight = canGo(y, x + 1);

		if (status === "H") {
			if (goLeft) {
				q.push(["H", y, x - 1, bill + 100]);
			}

			if (goRight) {
				q.push(["H", y, x + 1, bill + 100]);
			}

			if (goUp) {
				q.push(["V", y - 1, x, bill + 600]);
			}

			if (goDown) {
				q.push(["V", y + 1, x, bill + 600]);
			}
		} else {
			if (goUp) {
				q.push(["V", y - 1, x, bill + 100]);
			}

			if (goDown) {
				q.push(["V", y + 1, x, bill + 100]);
			}

			if (goLeft) {
				q.push(["H", y, x - 1, bill + 600]);
			}

			if (goRight) {
				q.push(["H", y, x + 1, bill + 600]);
			}
		}
	}

	return board[board.length - 1][board[0].length - 1];
}

console.log(
	solution([
		[0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0, 1, 0],
		[0, 1, 0, 1, 0, 0, 0],
		[0, 0, 0, 1, 0, 1, 0],
	])
);
