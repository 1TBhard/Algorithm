// 슬라이드 윈도우
// (현재 + 이전 1개전)와 (현재 + 2개전) 을 비교하면서 푸는 문제

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	if (cost.length === 1) return 0;

	let minOneStepLeastCost = cost[1];
	let minTwoStepLeastCost = cost[0];

	for (let i = 2; i < cost.length; i++) {
		const currentLeastCost =
			Math.min(minOneStepLeastCost, minTwoStepLeastCost) + cost[i];

		minTwoStepLeastCost = minOneStepLeastCost;
		minOneStepLeastCost = currentLeastCost;
	}

	return Math.min(minTwoStepLeastCost, minOneStepLeastCost);
};

const TEST = [1, 6, 7, 2, 1];

console.log(minCostClimbingStairs(TEST));
