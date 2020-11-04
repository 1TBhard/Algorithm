/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */


/* =================== 첫번째 풀이 =================== */
// 84 ms, faster than 46.78%
// 39.2 MB, less than 11.77%
var search = function(nums, target) {
  return nums.indexOf(target) > -1;
};

/* =================== 두번째 풀이 =================== */
// Runtime: 96 ms, faster than 18.77%
// Memory Usage: 40.4 MB, less than 5.33%
var search = function(nums, target) {
  
  let [start, end] = [0, nums.length - 1];
  let mid;

  while(start <= end) {
    mid = Math.floor((start + end) / 2);

    if(nums[mid] === target) return true;

    // mid가 end보다 더 클때, 즉 회전된 경우, start > end
    if(nums[mid] > nums[end]) {
      // start <= target < mid 일 때
      if(nums[start] <= target && target < nums[mid] )
        end = mid - 1;
      // end< target < mid일 때
      else
        start = mid + 1;
    }
    // mid가 end 보다 작을 때, 정상 혹은 회전됬지만 정상 범위처럼 작동
    else if(nums[mid] < nums[end]) {
      // mid < target < end 일때
      if(nums[mid] < target && target <= nums[end])
        start = mid + 1
      // target < mid < end 일 때
      else
        end = mid - 1;
    }
    // 그 왜의 경우는 끝을 줄여나감
    else 
      end--;
  }
  return false;
};