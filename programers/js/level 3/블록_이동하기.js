// [다른 블록, head]
// [  다른 블록,
//    head    ]
// 으로 있다고 가정함

function solution(board) {
	let q = [["H", 0, 1, 0]];

	// H(가로)일때 방문했는지, V(세로)일때 방문한 것을 기록
	let visted = {
		H: Array(board.length)
			.fill(0)
			.map(() => Array(board[0].length).fill(false)),
		V: Array(board.length)
			.fill(0)
			.map(() => Array(board[0].length).fill(false)),
	};

	// pose 가 board 안에 있는지 확인
	// 그리고 pose 가 1이 아닌지
	const isInRange = (y, x) => {
		// 맵을 벗어나는지
		if (board[y] === undefined) return false;

		if (board[y][x] === undefined || board[y][x] === 1) return false;
		return true;
	};

	// 방문했는지?
	const isVisited = (status, y, x) => visted[status][y][x];

	while (q.length > 0) {
		// status: "H" | "V" => 가로, 세로
		// cur_haed: 현재 head 위치
		// answer : 이동까지 걸린 시간
		let [status, y, x, answer] = q.shift();

		if (isVisited(status, y, x)) continue;

		// 방문한 것을 true
		visted[status][y][x] = true;

		if (y === board.length - 1 && x === board.length - 1) {
			return answer;
		}

		if (status === "H") {
			// 위로 둘다 이동 가능하니 회전도 가능
			const goUp = isInRange(y - 1, x) && isInRange(y - 1, x - 1);

			// 아래로 둘다 이동 가능하니 회전도 가능
			const goDown = isInRange(y + 1, x) && isInRange(y + 1, x - 1);
			const goRight = isInRange(y, x + 1);

			// [다른블록, head] 이므로 -2
			const goLeft = isInRange(y, x - 2);

			if (goUp) {
				q.push(["H", y - 1, x, answer + 1]);
				q.push(["V", y, x, answer + 1]); // head 중심으로 회전
				q.push(["V", y, x - 1, answer + 1]); // 다른 블록 중심으로 회전
			}

			if (goDown) {
				q.push(["H", y + 1, x, answer + 1]);
				q.push(["V", y + 1, x, answer + 1]); // head 중심으로 회전
				q.push(["V", y + 1, x - 1, answer + 1]); // 다른 블록 중심으로 회전
			}

			if (goRight) {
				q.push(["H", y, x + 1, answer + 1]);
			}

			if (goLeft) {
				q.push(["H", y, x - 1, answer + 1]);
			}
		} else {
			const goUp = isInRange(y - 2, x);
			const goDown = isInRange(y + 1, x);
			const goRight = isInRange(y, x + 1) && isInRange(y - 1, x + 1);
			const goLeft = isInRange(y, x - 1) && isInRange(y - 1, x - 1);

			if (goUp) {
				q.push(["V", y - 1, x, answer + 1]);
			}
			if (goDown) {
				q.push(["V", y + 1, x, answer + 1]);
			}

			if (goRight) {
				q.push(["V", y, x + 1, answer + 1]);
				q.push(["H", y - 1, x + 1, answer + 1]); // 다른 블록 중심으로 회전
				q.push(["H", y, x + 1, answer + 1]); // head를 중심으로 회전
			}

			if (goLeft) {
				q.push(["V", y, x - 1, answer + 1]);
				q.push(["H", y - 1, x, answer + 1]); // 다른 블록 중심으로 회전
				q.push(["H", y, x, answer + 1]); // head를 중심으로 회전
			}
		}
	}
}

try {
	solution([
		[0, 0, 0, 1, 1],
		[0, 0, 0, 1, 0],
		[0, 1, 0, 1, 1],
		[1, 1, 0, 0, 1],
		[0, 0, 0, 0, 0],
	]);
} catch (Err) {
	console.error(new Error(Err));
}
