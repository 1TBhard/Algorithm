// tc는 다 맞다고 나오는데 아래와 같이 메시지 뜨면서 안됨
// 내부적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.

function solution(k, dungeons) {
	var answer = 0;

	const adventure = (curK, visited, curComplete) => {
		for (let i = 0; i < dungeons.length; i++) {
			if (visited.includes(i)) continue;
			let [leastK, consumK] = dungeons[i];

			if (curK >= leastK && curK >= consumK) {
				answer = Math.max(answer, curComplete + 1);
				adventure(curK - consumK, [...visited, i], curComplete + 1);
			}
		}
	};

	adventure(k, [], 0);

	return answer;
}

console.log(
	solution(0, [
		[1, 2],
		[2, 3],
		[3, 4],
	])
);
