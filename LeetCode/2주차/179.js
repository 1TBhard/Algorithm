/* =============================== 179. Largest Number =============================== */
// faster than 92.02% of JavaScript
/**
 * @param {number[]} nums
 * @return {string}
 */

function ff(a, b) {
  return a + b > b + a ? -1 : 1;
}

var largestNumber = function(nums) {
  nums.sort((a, b) => ff(String(a), String(b)));

  return nums[0] === 0 ? "0" : nums.join("");
}