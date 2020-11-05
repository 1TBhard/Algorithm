// Runtime: 96 ms, faster than 84.08%
// Memory Usage: 49.7 MB, less than 5.78%

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let del = [];
  let answer = s.split("");

  for(var i=0 ; i<answer.length ; i++) {
    if(answer[i] === "(") {
      del.push(i);
    } else if(answer[i] === ")") {
      if(del.length > 0)
        del.pop();
      else 
        answer[i] = ""
    }
  }

  del.forEach(i => {
    answer[i] = "";
  });

  return answer.join("");
};

minRemoveToMakeValid("))((");