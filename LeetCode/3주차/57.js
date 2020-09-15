
/* =========================== 56. Merge Intervals =========================== */
// 85.33%
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let result = [];

  intervals.sort((a, b) => a[0] - b[0]);

  let new_interval = intervals[0];

  for(var i=1 ; i<intervals.length ; i++) {
    if(intervals[i][0] <= new_interval[1]) {
      new_interval = [
        Math.min(intervals[i][0], new_interval[0]),
        Math.max(intervals[i][1], new_interval[1])
      ];
    }
    else {
      result.push(new_interval);
      new_interval = intervals[i];
    }
  }

  result.push(new_interval);

  return result[0] === undefined ? [] : result;
};