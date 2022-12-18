/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
	const q = [[sr, sc]];
	const beforeColor = image[sr][sc];
	image[sr][sc] = color;

	const getGoTo = (y, x) => [
		[y + 1, x],
		[y - 1, x],
		[y, x + 1],
		[y, x - 1],
	];

	while (q.length) {
		let [cur_y, cur_x] = q.shift();

		for ([y, x] of getGoTo(cur_y, cur_x)) {
			if (y < 0 || y >= image.length || x < 0 || x >= image[0].length) {
				continue;
			}

			if (image[y][x] !== beforeColor || image[y][x] === color) {
				continue;
			}

			image[y][x] = color;

			q.push([y, x]);
		}
	}

	return image;
};
