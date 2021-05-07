// 백준 5549. 행성 탐사

// /* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// /* ============================================================== */

function solution(k, MAP, checkInfo) {
	const newMap = MAP.map((arr, y) =>
		arr.map((_, x) => {
			const obj = {
				J: 0,
				I: 0,
				O: 0,
			};
			const char = MAP[y][x];

			switch (char) {
				case "J":
				case "I":
				case "O":
					obj[char]++;
					return obj;
				case "X":
				default:
					return obj;
			}
		})
	);


	for (var y = 1; y < MAP.length; y++) {
		newMap[y][0].J += newMap[y - 1][0].J;
		newMap[y][0].I += newMap[y - 1][0].I;
		newMap[y][0].O += newMap[y - 1][0].O;
		for (var x = 1; x < MAP[0].length; x++) {
			newMap[y][x].J +=
				newMap[y - 1][x].J + newMap[y][x - 1].J - newMap[y - 1][x - 1].J;
			newMap[y][x].I +=
				newMap[y - 1][x].I + newMap[y][x - 1].I - newMap[y - 1][x - 1].I;
			newMap[y][x].O +=
				newMap[y - 1][x].O + newMap[y][x - 1].O - newMap[y - 1][x - 1].O;
		}
	}

	for (var [s_y, s_x, e_y, e_x] of checkInfo) {
		let { J, O, I } = newMap[e_y][e_x];

		J -=
			newMap[s_y - 1][e_x].J +
			newMap[e_y][s_x - 1].J -
			newMap[s_y - 1][s_x - 1].J;
		O -=
			newMap[s_y - 1][e_x].O +
			newMap[e_y][s_x - 1].O -
			newMap[s_y - 1][s_x - 1].O;
		I -=
			newMap[s_y - 1][e_x].I +
			newMap[e_y][s_x - 1].I -
			newMap[s_y - 1][s_x - 1].I;

		console.log(`${J} ${O} ${I}`);
	}
}

var input = `4 7
4
JIOJOIJ
IOJOIJO
JOIJOOI
OOJJIJO
3 5 4 7
2 2 3 6
2 2 2 2
1 1 4 7`.split("\n");

var [h, w] = input[0]
	.split(" ")
	.map((_) => parseInt(_));
var k = parseInt(input[1]);

const MAP = [new Array(input[2].length + 1).fill("X")];
for (var i = 2; i < h + 2; i++) {
	MAP.push(["X", ...input[i].split("")]);
}

const checkInfo = [];
for (var i = 2 + h; i < input.length; i++) {
	checkInfo.push(input[i].split(" ").map((_) => parseInt(_)));
}

solution(k, MAP, checkInfo);
