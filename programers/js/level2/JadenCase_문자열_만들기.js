function solution(s) {
	var answer = s.replace(/\w/gi, (c) => c.toLowerCase());
	answer = answer.replace(/^\w| \w/gi, (str) => str.toUpperCase());

	return answer;
}

solution("3people unFollowed me");
