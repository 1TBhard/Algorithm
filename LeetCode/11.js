/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let i = 0;

	let j = height.length - 1;

	let answer = 0;
	while (i < j) {
		let h = Math.min(height[i], height[j]);
		answer = Math.max(answer, h * (j - i));

		if (height[i] < height[j]) {
			i++;
		} else {
			j--;
		}
	}

	return answer;
};

const height = [1, 2, 1];
console.log(maxArea(height));
