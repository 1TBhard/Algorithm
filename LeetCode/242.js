/* ================================== 242. Valid Anagram ================================== */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let s_hash = { };
  let t_hash = { };

  // init hash
  for(let init_c = ("a").charCodeAt(0) ; init_c < ("z").charCodeAt(0) + 1 ; init_c++) {
    s_hash[String.fromCharCode(init_c)] = 0;
    t_hash[String.fromCharCode(init_c)] = 0;
  }
  
  s.split("").forEach(c => {
    s_hash[c]++;
  });

  t.split("").forEach(c => {
    t_hash[c]++;
  });

  for(let init_c = ("a").charCodeAt(0) ; init_c < ("z").charCodeAt(0) + 1 ; init_c++) {
    if(t_hash[String.fromCharCode(init_c)] != s_hash[String.fromCharCode(init_c)])
      return false;
  }

  return true;
};

/*
Runtime: 80 ms, faster than 93.93% of JavaScript online submissions for Valid Anagram.
Memory Usage: 38.8 MB, less than 62.17% of JavaScript online submissions for Valid Anagram.
*/
