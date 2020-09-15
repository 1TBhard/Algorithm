// O(n^2)

function solution(gems) {
	var answer = [0, gems.length];
	let all_list = new Set(gems);
	let stack = [];
	let pos = [];

	for (var i = 0; i < gems.length; i++) {
		const cur_in_idx = stack.indexOf(gems[i]);

		if (cur_in_idx !== -1) {
			stack = [stack.splice(cur_in_idx)];
			pos = [pos.splice(cur_in_idx)];
		}
		stack.push(gems[i]);
		pos.push(i);

		if (all_list.size == stack.length) {
			answer =
				answer[1] - answer[0] > pos[pos.length - 1] - pos[0]
					? [pos[0], pos[pos.length - 1]]
					: answer;
		} else {
			answer[0] = Math.max(answer[0], pos[0]);
		}
	}

	return [answer[0] + 1, answer[1] + 1];
}

// Map을 이용
// O(n)
function solution(gems) {
	var answer = [0, gems.length - 1];
	let gem_list = new Set(gems); // 잼의 종류
	let cur_list = new Map(); // 현재 가지고 있는 잼(key)의 개수(value)
	let [start, end] = [0, 0];

	cur_list.set(gems[0], 1);

	while (start <= end && end < gems.length) {
		if (cur_list.size === gem_list.size) {
			if (answer[1] - answer[0] > end - start) {
				answer = [start, end];
			}

			if (cur_list.get(gems[start]) - 1 > 0) {
				cur_list.set(gems[start], cur_list.get(gems[start]) - 1);
			} else {
				cur_list.delete(gems[start]);
			}
			start++;
		} else {
			end++;
			cur_list.set(gems[end], (cur_list.get(gems[end]) | 0) + 1);
		}
	}

	return [answer[0] + 1, answer[1] + 1];
}
