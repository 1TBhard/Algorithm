var asteroidCollision = function (asteroids) {
	const answer = [];

	for (let i = 0; i < asteroids.length; i++) {
		let last = answer[answer.length - 1];
		let a = asteroids[i];

		if (answer.length === 0 || last < 0 || a > 0) {
			answer.push(a);
		} else if (last + a === 0) {
			answer.splice(answer.length - 1, 1);
			continue;
		} else if (Math.abs(last) < Math.abs(a)) {
			answer.splice(answer.length - 1, 1);
			i--;
		}
	}

	return answer;
};

// const TEST = [10, 2, -5];
// const TEST = [5, 10, -5];
const TEST = [-2, -1, 1, 2];

console.log(asteroidCollision(TEST));
