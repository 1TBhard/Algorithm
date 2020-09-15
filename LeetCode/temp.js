/* ========= 714. Best Time to Buy and Sell Stock with Transaction Fee  ========= */
/* 74.40% */
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let result = 0;
  let afterBuyOne = -prices[0];

  for(var i=0 ; i<prices.length ; i++) {
    result = Math.max(result, afterBuyOne + prices[i] - fee );
    afterBuyOne = Math.max(afterBuyOne, result - prices[i]);
  }
  
  return result;
};