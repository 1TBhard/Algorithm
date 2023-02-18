var findPeakElement = function (nums) {
	let i = 0;
	let j = nums.length - 1;

	let temp = nums[0];
	let answer = 0;
	while (i <= j) {
		if (temp < nums[i] || temp < nums[j]) {
			if (nums[i] < nums[j]) {
				temp = nums[j];
				answer = j;
			} else {
				temp = nums[i];
				answer = i;
			}
		}

		i++;
		j--;
	}

	return answer;
};
