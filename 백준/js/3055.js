// 백준 3055. 탈출

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/* ============================================================== */

function solution(MAP) {

  const isWaterCanGo = (y, x) => {
    if(y >= MAP.length || y < 0) return false;
    if(x >= MAP[0].length || x < 0) return false;
    if(MAP[y][x] !== ".") return false
    return true
  }

  const isGoSumCanGo = (y, x, round) => {
    if(y >= MAP.length || y < 0) return false;
    if(x >= MAP[0].length || x < 0) return false;

    if(MAP[y][x] === "D") return true;
    if(MAP[y][x] === "A") return false;

    // 이미 온 곳 혹은 돌 혹은 물이미 있는 곳
    if(MAP[y][x] === "X") return false;
    if(MAP[y][x] <= round) return false;

    return true;
  }

  let waterQ = [];
  let q = [];
  
  // 물 위치와 고슴도치 위치 찾기
  for(var i=0 ; i < MAP.length ; i++) {
    for(var j=0 ; j < MAP[0].length ; j++) {
      if(MAP[i][j] === "*") {
        MAP[i][j] = 0;
        waterQ.push([i, j, 0]);
      }
      if(MAP[i][j] === "S") {
        MAP[i][j] = "A"
        q.push([i, j, 0]);
      }
    }
  }

  while(waterQ.length > 0) {
      const [y, x, round] = waterQ.splice(0, 1)[0];
  
      const goUp = isWaterCanGo(y-1, x);
      const goDown = isWaterCanGo(y+1, x);
      const goLeft = isWaterCanGo(y, x-1);
      const goRight = isWaterCanGo(y, x+1);
  
      if(goUp) {
        MAP[y-1][x] = round+1;
        waterQ.push([y-1, x, round+1]);
      }
      if(goDown) {
        MAP[y+1][x] = round+1;
        waterQ.push([y+1, x, round+1]);
      }
      if(goLeft) {
        MAP[y][x-1] = round+1;
        waterQ.push([y, x-1, round+1]);
      }
      if(goRight) {
        MAP[y][x+1] = round+1;
        waterQ.push([y, x+1, round+1]);
      }
  }



  while(q.length > 0) {
      const [y, x, round] = q.splice(0, 1)[0];
      if(MAP[y][x] === "D") {
        console.log(round);
        return;
      }
      
      const goUp = isGoSumCanGo(y-1, x, round+1);
      const goDown = isGoSumCanGo(y+1, x, round+1);
      const goLeft = isGoSumCanGo(y, x-1, round+1);
      const goRight = isGoSumCanGo(y, x+1, round+1);

      if(goUp) {
        q.push([y-1, x, round+1]);
        if(MAP[y-1][x] !== "D")
          MAP[y-1][x] = "A"
      }
      if(goDown) {
        q.push([y+1, x, round+1]);
        if(MAP[y+1][x] !== "D")
          MAP[y+1][x] = "A"
      }
      if(goLeft) {
        q.push([y, x-1, round+1]);
        if(MAP[y][x-1] !== "D")
          MAP[y][x-1] = "A"
      }
      if(goRight) {
        q.push([y, x+1, round+1]);
        if(MAP[y][x+1] !== "D")
          MAP[y][x+1] = "A"
      }
  }

  console.log("KAKTUS");
  return;
}

input = `10 11
D..........
...........
...........
...........
...........
...........
........S..
...........
...........
...........`.split("\n")

var MAP = input.slice(1, input.lenght).map(_ => _.split(""))
solution(MAP)


// 답: 44
// 50 50
// ..................................................
// ............................................XXXXD.
// ...............................................XXX
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ................................S.................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..................................................
// ..............................................*...
// ..................................................
// ..................................................
// ..................................................