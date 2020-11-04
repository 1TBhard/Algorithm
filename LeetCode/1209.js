/* ================================= 1209. Remove All Adjacent Duplicates in String II ================================= */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var removeDuplicates = function (s, k) {
  // 스택에 k-1개 만큼의 문자열을 먼저 넣음
  let stack = s.substring(0, k).split("");


  for(var i=k ; i < s.length ; i++) {
    stack.push(s[i]);

    if(stack.length >= k) {
      // 연속하는 문자열 계속해서 없애기
      if(stack.slice(-k).every(element => element === stack[stack.length - 1]))
        stack.splice(stack.length - k);
    }
    
  }

  return stack.join("");
};

removeDuplicates("deeedbbcccbdaa", 3);

console.log();

/* =============================================================================================================================
Runtime: 788 ms, faster than 18.75% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.
Memory Usage: 44.7 MB, less than 8.07% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.
=============================================================================================================================*/
