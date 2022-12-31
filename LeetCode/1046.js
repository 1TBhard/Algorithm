/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	const arr = [...stones.sort((a, b) => a - b)];

	while (arr.length > 1) {
		const smeshed = arr.pop() - arr.pop();

		if (smeshed === 0) continue;
		else arr.push(smeshed);

		arr.sort((a, b) => a - b);
	}

	return arr[0] ?? 0;
};

const TEST = [2, 7, 4, 1, 8, 1];
lastStoneWeight(TEST);

new MaxPriorityQueue();
