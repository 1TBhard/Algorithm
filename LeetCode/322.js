/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	if (amount === 0) return 0;

	const IMPOSSIBLE_AMOUNT = amount + 1;

	const arr = Array(amount + 1).fill(IMPOSSIBLE_AMOUNT);

	for (let k = 0; k < arr.length; k++) {
		if (coins[k] < arr.length) arr[coins[k]] = 1;
	}

	for (let coin of coins) {
		for (let i = 1; i < arr.length; i++) {
			if (i + coin >= arr.length) break;
			arr[i + coin] = Math.min(arr[i + coin], arr[i] + 1);
		}
	}

	return arr[amount] === IMPOSSIBLE_AMOUNT ? -1 : arr[amount];
};

const COINS = [474, 83, 404, 3];
const AMOUNT = 264;

console.log(coinChange(COINS, AMOUNT));
