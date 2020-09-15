function solution(relation) {
	var answer = [];

	for (var i = 0; i < Math.pow(2, relation[0].length); i++) {
		// bit 값으로 String을 만드며 앞에부터 0을 채움
		var f_bit = Number(i).toString(2).padStart(relation[0].length, "0");
		var hubo_key_pool = new Set();

		answer.push(f_bit);
		for (var tuple of relation) {
			var temp = "";

			// tupe로 조합되는 키
			for (var j = 0; j < f_bit.length; j++) {
				if (f_bit[j] == "1") temp += tuple[j];
			}

			if (hubo_key_pool.has(temp)) {
				answer.pop();
				break;
			} else hubo_key_pool.add(temp);
		}

		// 유일성을 만족하는지? (기존의 가지고 있는 키와 비교)
		for (var hubo_key of answer.slice(0, answer.length - 1)) {
			const isHave =
				(parseInt(hubo_key, 2) & parseInt(f_bit, 2)) == parseInt(hubo_key, 2);
			// 1011 & 0011 == 0011 이면 11이 겹치니 안됨
			if (isHave) {
				answer.pop();
				break;
			}
		}
	}

	return answer.length;
}

solution([
	["100", "ryan", "music", "2"],
	["200", "apeach", "math", "2"],
	["300", "tube", "computer", "3"],
	["400", "con", "computer", "4"],
	["500", "muzi", "music", "3"],
	["600", "apeach", "music", "2"],
]);
