/* ================================= 1047. Remove All Adjacent Duplicates In String ================================= */

/**
 * @param {string} S
 * @return {string}
 */

var removeDuplicates = function (S) {
	let stack = []; // 스택

	// 스택의 마지막 문자와 현재 S[i]의 문자를 비교 ? 스택에서 빼거나 : 스택에 S[i] 를 넣음
	for (var i = 0; i < S.length; i++)
		S[i] === stack[stack.length - 1] ? stack.pop() : stack.push(S[i]);

	// 배열을 문자열로 출력
	return stack.join("");
};


/* ======================================================= result =======================================================

Runtime: 84 ms, faster than 88.34% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
Memory Usage: 44.8 MB, less than 40.08% of JavaScript online submissions for Remove All Adjacent Duplicates In String.

======================================================================================================================= */
