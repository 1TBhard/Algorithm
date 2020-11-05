function solution(word) {
	let answer = "";

	const conv = (end, start, c_val) => {
		var c_code_value = end - (c_val - start);

		return String.fromCharCode(c_code_value);
	};

	const [row_start, row_end] = ["a".charCodeAt(0), "z".charCodeAt(0)];
	const [up_start, up_end] = ["A".charCodeAt(0), "Z".charCodeAt(0)];

	for (var i = 0; i < word.length; i++) {
		if (!/[A-Z]/gi.test(word[i])) {
			answer += word[i];
			continue;
		}
		const t = word[i].charCodeAt(0);

		// 소문자일 때
		if (t > up_end) {
			answer += conv(row_end, row_start, t);
		} else {
			answer += conv(up_end, up_start, t);
		}
	}

	return answer;
}

solution("A12b34C56dE");
// R olev blf
