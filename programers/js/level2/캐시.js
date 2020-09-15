// 첫번째 풀이
// 실패
function solution(cacheSize, cities) {
	let answer = 0;
	let queue = [];

	for (var city of cities) {
		city = city.toUpperCase();
		const idx = queue.indexOf(city);

		if (queue.length < cacheSize) {
			if (idx !== -1) {
				queue.splice(idx, 1);
				answer += 1;
			} else answer += 5;
			queue.push(city);
		} else {
			if (idx !== -1) {
				queue.splice(idx, 1);
				answer += 1;
			} else {
				queue.shift();
				answer += 5;
			}

			queue.push(city);
		}
	}

	return answer;
}

// 반례!!!!! 답: 10, 결과 9
solution(0, ["Jeju", "Jeju", "Jeju", "Jeju", "Jeju"]);

// 두번째 풀이
function solution(cacheSize, cities) {
	let answer = 0;
	let queue = [];

	for (var city of cities) {
		city = city.toUpperCase();
		const idx = queue.indexOf(city);

		if (idx !== -1) {
			queue.splice(idx, 1);
			queue.push(city);
			answer += 1;
		} else {
			queue.push(city);
			answer += 5;
		}

		if (queue.length > cacheSize) {
			queue.shift();
		}
	}

	return answer;
}
