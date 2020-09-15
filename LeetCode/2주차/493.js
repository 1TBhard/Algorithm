/* ================================== 493. Reverse Pairs ==================================*/
/* 첫번째 트라이, Runtime: 548 ms, faster than 9.09% of JavaScript */

// var reversePairs = function(nums) {
//   const [start, end] = [0, nums.length - 1];
//   return mergeSort(nums, start, end);
// };
// 
// 
// // i > j * 2 라는 조건을 이용하여 합병 정렬을 이용한다.
// // 부분 리스트가 정렬된 것과 처음 배열에서 답을 구하는 것은 같다.
// 
// // ex) [1, 5, 3, 4, 1] => 3
// //
// // [1, 5], [3, 4, 1] => 0, 2 (올라간 j를 더함)
// // 정렬 [1, 5], [1, 3, 4]
// // [1, 5, 1, 3, 4] => 1
// // => 0 + 2 + 1 = 4
// function mergeSort(list, start, end) {
//   const mid = start + parseInt((end - start) / 2);
//   let cnt = 0;
// 
//   // 재귀 탈출 조건 start는 무조건 end 이하임
//   if(start >= end)
//     return 0;
// 
//   cnt = mergeSort(list, start, mid) + mergeSort(list, mid + 1, end);
// 
//   // i 는 비교할 수가 있는 인덱스
//   // j 는 비교당하는 수가 있는 인덱스
//   for(var [i, j] = [start, mid + 1] ; i <= mid ; i++) {
//     // 이미 크기 순으로 정렬된 배열들이니 
//     // i > j * 2 이 아닌 경우 현재 i에서 j 뒤로 가도 식을 만족할 수 가 없음
//     // 따라서, 다음 i를 j와 비교해야함
//     while(list[i] > list[j] * 2 && j <= end) {
//       j++;
//     }
// 
//     // 지금까지 조건에 맞아 상승한 j만큼 더함
//     cnt += j - (mid + 1)
//   }
// 
//   sortSubArr(list, start, end + 1);
// 
//   return cnt;
// }
// 
// function sortSubArr(list, start, end) {
//   const subList = list.slice(start, end);
// 
//   subList.sort((a, b) => a - b);
//   list.splice(start, end - start, ...subList);
// }
// 


/* 두번째 트라이, Runtime: 236 ms, faster than 50.00% of JavaScript */

var reversePairs = function(nums) {
  const [start, end] = [0, nums.length - 1];
  return mergeSort(nums, start, end);
};


// i > j * 2 라는 조건을 이용하여 합병 정렬을 이용한다.
// 부분 리스트가 정렬된 것과 처음 배열에서 답을 구하는 것은 같다.

// ex) [1, 5, 3, 4, 1] => 3
//
// [1, 5], [3, 4, 1] => 0, 2 (올라간 j를 더함)
// 정렬 [1, 5], [1, 3, 4]
// [1, 5, 1, 3, 4] => 1
// => 0 + 2 + 1 = 4
function mergeSort(list, start, end) {
  const mid = start + parseInt((end - start) / 2);
  let cnt = 0;

  // 재귀 탈출 조건 start는 무조건 end 이하임
  if(start >= end)
    return 0;

  cnt = mergeSort(list, start, mid) + mergeSort(list, mid + 1, end);

  // i 는 비교할 수가 있는 인덱스
  // j 는 비교당하는 수가 있는 인덱스
  for(var [i, j] = [start, mid + 1] ; i <= mid ; i++) {
    // 이미 크기 순으로 정렬된 배열들이니 
    // i > j * 2 이 아닌 경우 현재 i에서 j 뒤로 가도 식을 만족할 수 가 없음
    // 따라서, 다음 i를 j와 비교해야함
    while(list[i] > list[j] * 2 && j <= end) {
      j++;
    }

    // 지금까지 조건에 맞아 상승한 j만큼 더함
    cnt += j - (mid + 1)
  }

  sortSubArr(list, start, end, mid);

  return cnt;
}

// 소팅 부분 변경
function sortSubArr(list, start, end, mid) {
  const temp = new Array(end - start + 1);
  let count = 0;
  let left_idx = start;
  let right_idx = mid + 1;

  // 왼쪽 인덱스가 절반까지 혹은 오른쪽 인덱스가 마지막까지인지
  while( left_idx <= mid && right_idx <= end ) {
    if(list[left_idx] < list[right_idx]) {
      temp[count++] = list[left_idx++];
    } else {
      temp[count++] = list[right_idx++];
    }
  }

  // 남은 left 확인
  while(left_idx <= mid) {
    temp[count++] = list[left_idx++];
  }

  // 남은 right 확인
  while(right_idx <= end) {
    temp[count++] = list[right_idx++];
  }

  for(var j=0 ; j < temp.length ; j++) {
    list[start + j] = temp[j];
  }
}
