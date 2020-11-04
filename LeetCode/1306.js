/* ======================= 1306. Jump Game III =======================*/
// faster than 91.21% of JavaScript
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {

  let visited = new Set()
  let q = [start];

  while(q.length > 0) {
    const cur_idx = q.shift();
    if(arr[cur_idx] === 0)
      return true;

    if(visited.has(cur_idx)) continue;

    const next_left = cur_idx - arr[cur_idx];
    if(next_left >= 0)
      q.push(next_left);

    const next_right = cur_idx + arr[cur_idx];
    if(next_right <= arr.length - 1)

    q.push(next_left, next_right);
    visited.add(cur_idx);
  }

  return false;
};