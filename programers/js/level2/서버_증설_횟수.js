function solution(players, m, k) {
	const serverList = Array(24).fill(0);

	for (let currentTime = 0; currentTime < players.length; currentTime++) {
		const capablePlayer =
			serverList
				.slice(Math.max(currentTime - k + 1, 0), currentTime)
				.reduce((acc, cur) => acc + cur, 1) * m;

		if (players[currentTime] >= capablePlayer) {
			serverList[currentTime] =
				Math.floor((players[currentTime] - capablePlayer) / m) + 1;
		}
	}

	return serverList.reduce((acc, cur) => acc + cur, 0);
}

solution(
	[0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],
	3,
	5
);
