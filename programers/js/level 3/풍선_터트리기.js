function solution(a) {
	const answer = [];

	let leftMin = a[0];
	let rightMin = a[a.length - 1];

	const minArr = new Array(a.length)
		.fill((_) => undefined)
		.map(() => ({
			left: undefined,
			right: undefined,
		}));

	for (let leftIdx = 0; leftIdx < a.length; leftIdx++) {
		if (leftMin > a[leftIdx]) {
			leftMin = a[leftIdx];
		}

		const rightIdx = a.length - 1 - leftIdx;

		if (rightMin > a[rightIdx]) {
			rightMin = a[rightIdx];
		}

		minArr[leftIdx].left = leftMin;
		minArr[rightIdx].right = rightMin;
	}

	for (let i = 0; i < a.length; i++) {
		if (minArr[i].left >= a[i] || minArr[i].right >= a[i]) {
			answer.push(a[i]);
		}
	}

	return answer.length;
}

// const TEST = [9, -1, -5];
const TEST = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];

console.log(solution(TEST));
