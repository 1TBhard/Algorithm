// 백준 2580. 스도쿠

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
/* ============================================================== */

function solution(sudokuMap) {
	const zeroPosList = [];

	for (var h = 0; h < sudokuMap.length; h++)
		for (var w = 0; w < sudokuMap[0].length; w++)
			if (sudokuMap[h][w] == 0) zeroPosList.push([h, w]);

	const recursive = (zeroPosIdx) => {
		if (zeroPosIdx >= zeroPosList.length) {
			for (var oneRow of sudokuMap) {
        console.log(oneRow.join(" "));
      }
      // 전체 종료
			process.exit(0);
		}

		const [y, x] = zeroPosList[zeroPosIdx];

    const alreadyInSet = new Set();


    for(var i = 0 ; i<9 ; i++) {
      alreadyInSet.add(sudokuMap[y][i])
      alreadyInSet.add(sudokuMap[i][x])
    }

		let bigY = parseInt(y / 3);
		let bigX = parseInt(x / 3);

		// 블록(구역) 에 있는 숫자

		for (var idxY = bigY * 3; idxY < bigY * 3 + 3; idxY++) {
			for (var idxX = bigX * 3; idxX < bigX * 3 + 3; idxX++) {
				alreadyInSet.add(sudokuMap[idxY][idxX]);
			}
		}

		// 0 은 지움
		alreadyInSet.delete(0);

		const huboList = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
			(item) => !alreadyInSet.has(item)
		);

		// 후보 숫자 리스트로 돌음
		for (var tryNum of huboList) {
			sudokuMap[y][x] = tryNum;

			recursive(zeroPosIdx + 1);
		}
    
		// 호보 숫자를 돌았음에도 스토쿠 완성을 못할 때
		// 지금 요소를 0으로 다시 바꾸고 함수 종료
		sudokuMap[y][x] = 0;
	};

	recursive(0);
}

input = `0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0`;

const SUDOKU_MAP = input
	.split("\n")
	.map((oneLine) => oneLine.split(" ").map((_) => parseInt(_)));

solution(SUDOKU_MAP);
