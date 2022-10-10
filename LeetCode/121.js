/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0;
	let stockToBuy = prices[0];

	for (let price of prices) {
		if (stockToBuy > price) {
			stockToBuy = price;
		}

		const currentProfit = price - stockToBuy;
		if (currentProfit > maxProfit) {
			maxProfit = currentProfit;
		}
	}

	return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
