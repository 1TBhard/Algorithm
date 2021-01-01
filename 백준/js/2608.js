// 백준 2608. 로마문자
// 로마 -> 숫자는 쉽지만 반대는 어려운 문제
// 숫자 -> 로마 일때는 1의 자리부터 시작하면서 로마자로 변환

/* ========================== 백준 입력 ========================== */
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();
/* ============================================================== */

function solution(roma1, roma2) {
	const ROMA_TABLE = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1,
	};

	// M ~ I 까지
	const ROMA_KEYS = Object.keys(ROMA_TABLE);

	// 키의 순서를 비교
	// k1 < k2 인 경우 => k1 이 순서가 더 앞인 경우
	const compareKeyOrder = (k1, k2) => {
		return ROMA_KEYS.indexOf(k1) <= ROMA_KEYS.indexOf(k2);
	};

  // 로마 -> 숫자
	const convRomaToNum = (roma) => {
		let num = 0;

		for (var i = 0 ; i < roma.length ; i++) {
      var [curChar, nextChar] = [roma[i], roma[i + 1]];

			if (!nextChar || compareKeyOrder(curChar, nextChar)) num += ROMA_TABLE[curChar];
      else {
        num += ROMA_TABLE[nextChar] - ROMA_TABLE[curChar];
        i++
      }
    }
    
    return num;
  };

  // 숫자 -> 로마
  const convNumToRoma = (num) => {
    let str = "";
    let idx = ROMA_KEYS.length - 1;

    const strNum = String(num);

    for(var i = strNum.length -1  ; i >= 0 ; i--) {
      switch(strNum[i]) {
        case '4':
          str = ROMA_KEYS[idx] + ROMA_KEYS[idx - 1] + str;
          break;
        case '9':
          str = ROMA_KEYS[idx] + ROMA_KEYS[idx - 2] + str;
          break;
        default:
          // 5 이상의 수인 경우
          if(strNum[i] >= '5') {
            for(var j=0 ; j < parseInt(strNum[i]) - 5 ; j++)
              str = ROMA_KEYS[idx] + str;
            
            str = ROMA_KEYS[idx - 1] + str;
          }
          else 
            for(var j=0 ; j < parseInt(strNum[i]) ; j++)
              str = ROMA_KEYS[idx] + str;
      }
      idx -= 2;
    }

    return str;
  }
  

  let plusAns = convRomaToNum(roma1) + convRomaToNum(roma2);
  let romaAns = convNumToRoma(plusAns);
  
  console.log(plusAns);
  console.log(romaAns);
}

const input = "CCXXXV\nDLIII";

const [r1, r2] = input.split("\n");

solution(r1, r2);
