// 백준 6198. 옥상 정원 꾸미기

/* ========================== 백준 입력 ========================== */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let numbers = [];                                                   // 입력될 숫자들

for (let i = 1; i < input.length; i++) {
	if (input[i] !== "") {
		numbers.push(parseInt(input[i]));
	}
}

/* ============================================================== */

function solution(building) {
	let answer = 0;
	let stack = [building[0]];
	let highest = building[0];

	for (var i = 1; i < building.length; i++) {
		if (highest < building[i]) {
			highest = building[i];
			stack = [highest];
			continue;
		}

		while (stack.length > 0 && stack[stack.length - 1] <= building[i]) {
			stack.pop();
		}

		stack.push(building[i]);

		answer += stack.length - 1;
	}

	// 결과
	console.log(answer);
}

solution(numbers);

// const TEST_CASE = [0, 0, 0, 10, 9];

// solution(TEST_CASE);
