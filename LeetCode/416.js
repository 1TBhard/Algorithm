/*
 i: 돈
 j: 합산으로
 합삽이 true,false인 arr 구성후

 arr[i][j] = arr[i-1][j] || arr[i-1][j - nums[i]] 으로 해결
 */
var canPartition = function (nums) {
	const sum = nums.reduce((acc, num) => acc + num, 0);

	if (sum % 2 === 1) {
		return false;
	}

	const target = sum / 2;
	const arr = Array.from(Array(nums.length + 1), () =>
		new Array(target + 1).fill(false)
	);

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[0].length; j++) {
			if (i === 0) arr[i][j] = false; // array가 빈 경우
			if (j === 0) arr[i][j] = true; // sum 이 0인 경우
		}
	}

	for (let i = 1; i < arr.length; i++) {
		for (let j = 1; j < arr[0].length; j++) {
			if (j - nums[i - 1] >= 0) {
				arr[i][j] = arr[i - 1][j] || arr[i - 1][j - nums[i - 1]];
			} else {
				arr[i][j] = arr[i - 1][j];
			}
		}
	}

	return arr[arr.length - 1][arr[0].length - 1];
};

const NUMS = [1, 2, 5];

console.log(canPartition(NUMS));
