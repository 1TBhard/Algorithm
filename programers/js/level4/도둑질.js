function solution(money) {
	const arr1 = money.slice(0, money.length - 1);
	const arr2 = money.slice(1, money.length);

	for (let i = 2; i < money.length - 1; i++) {
		if (i === 2) {
			arr1[i] += arr1[0];
			arr2[i] += arr2[0];
			continue;
		}

		arr1[i] += Math.max(arr1[i - 3], arr1[i - 2]);
		arr2[i] += Math.max(arr2[i - 3], arr2[i - 2]);
	}

	const answer = Math.max(
		arr1[arr1.length - 1],
		arr1[arr1.length - 2],
		arr2[arr2.length - 1],
		arr2[arr2.length - 2]
	);

	return answer;
}

const TEST = [5, 1, 3, 5, 3, 7];

console.log(solution(TEST));
