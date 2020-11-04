// 정답을 모으기 위한 Set
const answer = new Set();

function dfs(user_id, banned_id, visited) {
	if (banned_id.length === 0) {
		answer.add([...visited].join(""));
		return;
	}

	// user_id가 적어 bannd_id 만큼 넣지 못하거나 user_id가 빈 경우
	if (user_id.length < banned_id.length || user_id.length === 0) {
		return;
	}

	while (user_id.length > 0) {
		const str = user_id.pop();

		for (var i = 0; i < banned_id.length; i++) {
			if (banned_id[i].test(str) && !visited.has(str)) {
				const newVisited = new Set(visited);
				newVisited.add(str);

				const new_banned_id = [
					...banned_id.slice(0, i),
					...banned_id.slice(i + 1, banned_id.length),
				];

				// 해당 str 넣을때, 안 넣을때
				dfs([...user_id], new_banned_id, newVisited) +
					dfs([...user_id], banned_id, new Set(visited));
			}
		}
	}
}

function solution(user_id, banned_id) {
	const visited = new Set();

	banned_id = banned_id.map(
		(str) =>
			// 정규 표현식
			// * 을 . 으로 바꾸고 그 표현식에 맞는 것 찾음
			new RegExp(`^${str}$`.replace(/\*/g, "."))
	);

	dfs(user_id, banned_id, visited);

	return answer.size;
}
