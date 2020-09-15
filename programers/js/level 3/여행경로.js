// 남은 티켓, 현재 공항, 지나온 경로
function bfs(left_tickets, cur_airport, through_path) {
	const q = [];

	// 모든 티켓 소진한 경우
	if (left_tickets.length === 0) {
		return through_path;
	}

	for (var i = 0; i < left_tickets.length; i++) {
		if (left_tickets[i][0] === cur_airport) {
			q.push({
				idx: i,
				end: left_tickets[i][1],
			});
		}
	}

	/* prettier-ignore */
	while (q.length > 0) {
    const item = q.shift();
  
    // item을 제외한 경로
		const answer = bfs(
      [
        ...left_tickets.slice(0, item.idx),
        ...left_tickets.slice(item.idx + 1, left_tickets.length),
      ], 
      item.end, 
      [...through_path, item.end]
    );

    // 39줄에 의해서
    if(answer.length !== 0) {
      return answer;
    }
  }

	// 티켓이 소진하지 않은 경우, 잘못왔다는 것을 표기하기위해 빈 배열로 설정
	return [];
}

function solution(tickets) {
	var answer = [];

	// 티켓 이름 순으로 정렬
	tickets.sort();

	answer = bfs(tickets, "ICN", answer);

	return ["ICN", ...answer];
}

solution([
	["ICN", "A"],
	["A", "C"],
	["A", "D"],
	["D", "B"],
	["B", "A"],
]);
