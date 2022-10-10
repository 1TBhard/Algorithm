/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let high = n;
		let low = 1;
		let middle = 1;
		let falseList = new Set();

		while (low < high) {
			middle = Math.floor((high + low) / 2);
			if (isBadVersion(middle)) {
				if (falseList.has(middle - 1)) {
					break;
				}
				high = middle;
			} else {
				falseList.add(middle);
				low = middle + 1;
			}
		}

		return middle;
	};
};
