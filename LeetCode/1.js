// 브루트 포스로 풀 수 있으나 hashMap을 이용하여 더 O(n)으로 풀 수 있다.

// var twoSum = function (nums, target) {
// 	for (var i = 0; i < nums.length; i++) {
// 		for (var j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) return [i, j];
// 		}
// 	}
// };

var twoSum = function (nums, target) {
	const pairHash = {};

	for (let i = 0; i < nums.length; i++) {
		let pair = target - nums[i];

		if (pairHash[pair] !== undefined) {
			return [pairHash[pair], i];
		}

		pairHash[nums[i]] = i;
	}
};
