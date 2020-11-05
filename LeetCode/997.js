// Runtime: 120 ms, faster than 53.23%
// Memory Usage: 46.9 MB, less than 5.30%

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let g = {};

  for(var i= 1 ; i<N+1 ; i++) {
    g[i] = {
      in: 0,
      out: 0
    }
  }

  for(var [s, e] of trust) {
    g[s].out++;
    g[e].in++;
  }

  for(var k in g) {
    if(g[k].out === 0 && g[k].in === N-1)
      return k;
  }

  return -1
};