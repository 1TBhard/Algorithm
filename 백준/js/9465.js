// 백준 9465. 스티커

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();
/* ============================================================== */

function solution(n, arr) {
	arr[0].unshift(0);
	arr[1].unshift(0);

	for (var i = 2; i < n + 1; i++) {
		arr[0][i] += Math.max(arr[0][i - 2], arr[1][i - 2], arr[1][i - 1]);
		arr[1][i] += Math.max(arr[0][i - 2], arr[1][i - 2], arr[0][i - 1]);
	}

	console.log(Math.max(arr[0][n], arr[1][n]));

	return;
}

const caseNumber = parseInt(input.shift());

for (var i = 0; i < caseNumber; i++) {
	let n = parseInt(input.shift());

	if (n === 1) {
		const upElement = parseInt(input.shift());
		const downElement = parseInt(input.shift());
		const result = Math.max(upElement, downElement);

		console.log(result);
		continue;
	}

	const arr = [
		input
			.shift()
			.split(" ")
			.map((_) => parseInt(_)),
		input
			.shift()
			.split(" ")
			.map((_) => parseInt(_)),
	];

	solution(n, arr);
}
