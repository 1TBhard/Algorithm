/* ======================== 57. Insert Interval ======================== */

/* ============== 첫번째 시도, faster than 58.33% of JavaScript ============== */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let result = [];

  for(var i=0 ; i<intervals.length ; i++) {
    if(intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
    }
    else if(intervals[i][0] > newInterval[1]) {
      result.push(newInterval);
      newInterval = intervals[i];
    }
    else if(intervals[i][0] <= newInterval[1] || intervals[i][1] >= newInterval[0])
      {
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1])
      ];
    }
  }
  result.push(newInterval);

  return result;
};



/* ========================  2번째, 이진 탐색 사용 ========================
faster than 73.23% of JavaScript
*/
var insert = function(intervals, newInterval) {
  let result = [];

  if(intervals.length == 0) {
    return [newInterval];
  }

  var p = helper(intervals, newInterval);
  result = intervals.slice(0, p);

  for(var i=p ; i<intervals.length ; i++) {
    if(intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
    }
    else if(intervals[i][0] > newInterval[1]) {
      result.push(newInterval);
      newInterval = intervals[i];
    }
    else if(intervals[i][0] <= newInterval[1] || intervals[i][1] >= newInterval[0])
      {
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1])
      ];
    }
  }
  result.push(newInterval);

  return result;
};

// intervals 의 시작점 보다 newInterval 의 시작점이 큰 곳 찾음
function helper(intervals, newInterval) {
  var low = 0;
  var high = intervals.length - 1;        // intervals[i][0] <= newIntervals[0] 인 인덱스

  while(low<high) {
    var mid = low + parseInt((high - low) / 2);
    if(newInterval[0] <= intervals[mid][0]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high == 0 ? 0 : high - 1;
}
