// 태평양과 대서양의 가생이로 시작해서 만나는 곳을 출력한다.
// 태평양으로 흐르는 물을 1, 대서양으로 흐르는 물을 2를 더하여 3이 되는 부분을 찾는다.

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
	const answer = [];
	const oceanBridge = Array.from(new Array(heights.length), () =>
		Array(heights[0].length).fill(0)
	);

	const canGo = (i, j) => {
		if (i < 0 || i >= heights.length) return false;
		if (j < 0 || j >= heights[0].length) return false;

		return true;
	};

	const travel = (i, j, num, limitHeight) => {
		if (
			oceanBridge[i][j] >= 3 ||
			oceanBridge[i][j] === num ||
			heights[i][j] < limitHeight
		) {
			return;
		}

		if (oceanBridge[i][j] + num <= 3) {
			oceanBridge[i][j] += num;
			if (oceanBridge[i][j] === 3) {
				answer.push([i, j]);
			}
		}

		if (canGo(i + 1, j) && heights[i][j] <= heights[i + 1][j]) {
			travel(i + 1, j, num, limitHeight);
		}
		if (canGo(i - 1, j) && heights[i][j] <= heights[i - 1][j]) {
			travel(i - 1, j, num, limitHeight);
		}
		if (canGo(i, j + 1) && heights[i][j] <= heights[i][j + 1]) {
			travel(i, j + 1, num, limitHeight);
		}
		if (canGo(i, j - 1) && heights[i][j] <= heights[i][j - 1]) {
			travel(i, j - 1, num, limitHeight);
		}
	};

	for (let i = 0; i < heights.length; i++) {
		travel(i, 0, 1, heights[i][0]);
		travel(i, heights[0].length - 1, 2, heights[i][heights[0].length - 1]);
	}

	for (let j = 0; j < heights[0].length; j++) {
		travel(0, j, 1, heights[0][j]);
		travel(heights.length - 1, j, 2, heights[heights.length - 1][j]);
	}

	return answer;
};

const TEST = [
	[1, 2, 2, 3, 5],
	[3, 2, 3, 4, 4],
	[2, 4, 5, 3, 1],
	[6, 7, 1, 4, 5],
	[5, 1, 1, 2, 4],
];

pacificAtlantic(TEST);
