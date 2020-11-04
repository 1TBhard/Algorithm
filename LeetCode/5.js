// Runtime: 140 ms, faster than 53.45%
// Memory Usage: 40.7 MB, less than 45.76%
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let answer = s[0];

  const find_even = (left, right) => {
    if(left < 0 || right > s.length) return s.substring(left+1, right);

    if(s[right] !== s[left]) return s.substring(left+1, right);
    
    return find_even(left-1, right+1);
  }

  for(var i=0 ; i<s.length - 1  ; i++) {
    const even = find_even(i-1, i+1, 1);
    if(answer.length < even.length)
      answer = even;

    if(s[i] === s[i+1]) {
      const odd = find_even(i-1, i+2, 2);
      if(answer.length < odd.length)
        answer = odd;
    }
  }

  return answer;
};

// 눈여겨 볼만한 답

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max_left = 0, max_right = 0;

  for(var i=0 ; i < s.length  ; i++) {
    let left = i, right = i;

    // 오른쪽까지 같은 문자있으면 right 증가
    while (right < s.length && s[left] === s[right  + 1]) {
      right++;
    }

    // right까지 봤으므로
    i = right;

    while(left - 1 >= 0 && right + 1 <= s.length - 1 && s[left - 1] === s[right + 1]) {
      left--;
      right++;
    }

    if(max_right - max_left < right - left)
      [max_left, max_right] = [left, right]
  }

  return s.substring(max_left, max_right + 1);
};


longestPalindrome("babad");