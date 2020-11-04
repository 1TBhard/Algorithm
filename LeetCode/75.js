/* ================================== 75. Sort Colors ================================== */

/* ================  첫번째 시도, faster than 33.53% of JavaScript ================ */
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function(nums) {
//   nums.sort((a, b) => a - b);

//   return nums;
// };


/* ================ 두번째 시도, faster than 58.77% of JavaScript ================ */
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function(nums) {
//   let result = [0,0,0];
//   let min_num = 2;

//   nums.forEach(el => {
//     result[el]++;
    
//   })

//   min_num = Math.min(...nums);

//   for(var i=0 ; i<nums.length ; i++) {
//     nums[i] = min_num;
//     result[min_num]--;
//     while(result[min_num] == 0 && min_num <= 2)
//       min_num++;
//   }

//   return;
// };

/* ================ 세번째 시도, faster than 95.67% of JavaScript ================ */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
  let hash = {}
  let i = 0;

  nums.forEach(el => {
    hash[el] ? hash[el]++ : (hash[el] = 1);
  });

  [0, 1, 2].forEach(key => {
    while( --hash[key] >= 0) {
      nums[i++] = key;
    }
  });

  return null;
};
