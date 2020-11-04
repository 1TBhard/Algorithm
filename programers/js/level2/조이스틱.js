// 절대값을 이용해서 좌로 가는게 이득인지 우로 가는게 이득인지를 판단
function solution(name) {
	var answer = 0;

	let temp = [];

	for (var i = 0; i < name.length; i++) {
		if (name[i] === "A") continue;

		const rotate = name.charCodeAt(i) - 65;
		const reverseRotate = "Z".charCodeAt(0) - name.charCodeAt(i) + 1;

		temp.push({
			idx: i,
			charToRotate: rotate > reverseRotate ? reverseRotate : rotate,
		});
	}

	// 현재 idx
	let cur_idx = 0;

	while (temp.length > 0) {
		temp.sort((a, b) => {
			// 좌에서 우로, 우에서 좌로 갈때 더 작은 것을 선택
			const curToA = Math.min(
				cur_idx + (name.length - a.idx),
				Math.abs(a.idx - cur_idx)
			);
			const curToB = Math.min(
				cur_idx + (name.length - b.idx),
				Math.abs(b.idx - cur_idx)
			);

			return curToA - curToB;
		});
		const next = temp.shift();

		answer +=
			Math.min(
				cur_idx + (name.length - next.idx),
				Math.abs(next.idx - cur_idx)
			) + next.charToRotate;

		cur_idx = next.idx;
	}

	return answer;
}
