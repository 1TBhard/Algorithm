/* ====================== 714. Best Time to Buy and Sell Stock with Transaction Fee ====================== */
// 75.00%
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
	let result = 0;

	// 현재 맨 처음 주식을 하나 사서 이득이 -
	let current_profit = -prices[0];

	for (var i = 0; i < prices.length; i++) {
		// 가지고 있는 주식 안팔음 / 주식 팔음
		result = Math.max(result, current_profit + prices[i] - fee);

		// 전에 주식을 샀을 때 / 저번에 주식을 안사고 이번 주식을 살 때, result 비교
		current_profit = Math.max(current_profit, result - prices[i]);
	}

	return result;
};
