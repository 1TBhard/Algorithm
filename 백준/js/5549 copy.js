// 백준 5549. 행성 탐사
// 백준에서  JS로 풀수 없는 문제..

// /* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// /* ============================================================== */

input = `4 7
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

var jungleMap = new Array(h+1).fill(0).map(_ => new Array(w+1).fill(0))
var iceMap = new Array(h+1).fill(0).map(_ => new Array(w+1).fill(0))
var oceanMap = new Array(h+1).fill(0).map(_ => new Array(w+1).fill(0))


const checkInfo = [];
for (var i = 2 + h; i < input.length; i++) {
	checkInfo.push(input[i].split(" ").map((_) => parseInt(_)));
}

function solution() {
  for(var y=1 ; y < MAP.length ; y++) {
    for(var x=1 ; x < MAP[0].length ; x++) {
      if(MAP[y][x] === "J") {
        jungleMap[y][x] = jungleMap[y-1][x] + jungleMap[y][x-1] - jungleMap[y-1][x-1] + 1;
        iceMap[y][x] = iceMap[y-1][x] + iceMap[y][x-1] - iceMap[y-1][x-1];
        oceanMap[y][x] = oceanMap[y-1][x] + oceanMap[y][x-1] - oceanMap[y-1][x-1];
      } else if(MAP[y][x] === "O") {
        jungleMap[y][x] = jungleMap[y-1][x] + jungleMap[y][x-1] - jungleMap[y-1][x-1];
        oceanMap[y][x] = oceanMap[y-1][x] + oceanMap[y][x-1] - oceanMap[y-1][x-1] + 1;
        iceMap[y][x] = iceMap[y-1][x] + iceMap[y][x-1] - iceMap[y-1][x-1];
      } else if(MAP[y][x] === "I") {
        jungleMap[y][x] = jungleMap[y-1][x] + jungleMap[y][x-1]  - jungleMap[y-1][x-1] + 1;
        oceanMap[y][x] = oceanMap[y-1][x] + oceanMap[y][x-1] - oceanMap[y-1][x-1];
        iceMap[y][x] = iceMap[y-1][x] + iceMap[y][x-1]  - iceMap[y-1][x-1] + 1;
      }
    }
  }

	for (var [s_y, s_x, e_y, e_x] of checkInfo) {
		let J = jungleMap[e_y][e_x] - jungleMap[s_y-1][e_x] - jungleMap[e_y][s_x-1] + jungleMap[s_y-1][s_x-1];
    let I = iceMap[e_y][e_x] - iceMap[s_y-1][e_x] - iceMap[e_y][s_x-1] + iceMap[s_y-1][s_x-1];
    let O = oceanMap[e_y][e_x] - oceanMap[s_y-1][e_x] - oceanMap[e_y][s_x-1] + oceanMap[s_y-1][s_x-1];

		console.log(`${J} ${O} ${I}`);
	}
}

solution();
