
/* ================================= 402. Remove K Digits ================================= */
// faster than 72.02% of JavaScript
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

// k 는 지워야할 수
var removeKdigits = function(num, k) {
  let stack = [];
  let deleteCnt = 0;      // 현재까지 지운 개수

  for(var i = stack.length ; i< num.length; i++) {
    // 순차적으로 올라가다가 갑자기 아래로 내려가는 곳 찾아 지움 
    // 예) stack = 1237, num[i] = 3
    // => num[i] < stack[stack.length - 1] 이므로 stack.pop()
    while(stack.length > 0 && num[i] < stack[stack.length - 1] && deleteCnt < k) {
      stack.pop();
      deleteCnt++;
    }

    stack.push(num[i])
  }

  // 어차피 stack 안의 수는 오름차 순이니 뒤부터 지우면 저절로 작은 숫자가 됨
  while(deleteCnt < k) {
    stack.pop();
    deleteCnt++;
  }

  // "0200" 될때를 대비해서 0 제거
  while(stack[0] == "0") {
    stack = stack.slice(1, stack.length);
  }

  // "10", 2 => "0" 대비
  return stack[0] === undefined ? "0" : stack.join("");
};

