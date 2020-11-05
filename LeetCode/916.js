// Runtime: 216 ms, faster than 82.86%
// Memory Usage: 56.7 MB, less than 5.71%
/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  const nap = Array(26).fill(0);
  let answer = [];

  B.forEach(b => {
    var temp = Array(26).fill(0);

    for(var i=0 ; i<b.length ; i++)
      temp[b.charCodeAt(i) - 97]++;
    for(var i = 0 ; i<26 ; i++)
      nap[i] = Math.max(temp[i], nap[i]);
  });

  
  A.forEach(a => {
    var temp = Array(26).fill(0)
    
    for(var i=0 ; i<a.length ; i++)
      temp[a.charCodeAt(i) - 97]++;
    for(var i=0 ; i<26 ; i++)
      if(nap[i] > 0 && nap[i] > temp[i])
        return;
      
    answer.push(a);
  });

  return answer;
};

wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"]
)