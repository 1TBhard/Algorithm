function solution(board) {
	var answer = 0;

	// 1행만 있을 때
	if (board.length === 1) {
		return Math.max(...board[0]);
	}

	for (var i = 1, j; i < board.length; i++) {
		for (j = 1; j < board[i].length; j++) {
			if (board[i][j] !== 0)
				board[i][j] =
					Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
			answer = Math.max(answer, board[i][j]);
		}
	}

	return answer * answer;
}
