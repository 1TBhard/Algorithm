/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
	if (source === target) return 0;

	const dict = {};

	for (let i = 0; i < routes.length; i++) {
		for (let j = 0; j < routes[i].length; j++) {
			let bus = i;
			let stop = routes[i][j];

			if (!dict[stop]) dict[stop] = [];
			dict[stop].push(bus);
		}
	}

	let q = [source];
	let answer = 1;
	const visitedBus = new Set();

	while (q.length) {
		const nextStopList = [];
		while (q.length) {
			let currentStop = q.pop();

			for (let nextBus of dict[currentStop]) {
				if (visitedBus.has(nextBus)) {
					continue;
				}
				visitedBus.add(nextBus);

				for (let nextStop of routes[nextBus]) {
					if (nextStop === target) {
						return answer;
					}
					nextStopList.push(nextStop);
				}
			}
		}
		q = nextStopList;

		answer++;
	}

	return -1;
};

const routes = [
	[1, 2, 7],
	[3, 6, 7],
];
const source = 1;
const target = 6;
console.log(numBusesToDestination(routes, source, target));
