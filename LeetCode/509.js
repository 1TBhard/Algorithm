/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	const arr = [0, 1];

	for (var i = 2; i <= n; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}

	return arr[n];
};
