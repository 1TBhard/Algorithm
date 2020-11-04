/* =============================== 1054. Distant Barcodes ================================= */
//  62.50%
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  let how_many = {};

  for(var item of barcodes) {
    how_many[item] ? how_many[item]++ : (how_many[item] = 1);
  }

  let heap = [];

  for(var key in how_many) {
    heap.push(
      {
        key: key, 
        value: how_many[key],
      }
    );
  }

  heap = [[0,0], ...heap.sort((a, b) => b.value - a.value)];

  // 만약 1종류의 숫자밖에 업는 경우 즉, 바코드 입력이 하나일 때
  if(!heap[2]) {
    return [heap[1].key]
  }

  let result = [];

  while(heap[1].value > 0) {
    result.push(parseInt(heap[1].key));
    heap[1].value--;

    let j = 1;
    let temp;               // heap의 요소끼리 바꿀때 사용하는 변수

    if(heap[3] && heap[1].value < heap[3].value) {
      temp = heap[1];
      heap[1] = heap[2];
      heap[2] = heap[3];
      heap[3] = temp;
      j = 3;
    } else {
      [heap[1], heap[2]] = [heap[2], heap[1]];
      j = 2;
    }

    while(j * 2 < heap.length && heap[j].value <= heap[j * 2].value) {
      if(j * 2 + 1 < heap.length && heap[j].value < heap[j*2 + 1].value) {
        [heap[j], heap[j*2 + 1]] = [heap[j*2 + 1], heap[j]];
        j = j * 2 + 1;
      } else {
        [heap[j], heap[j*2]] = [heap[j*2], heap[j]];
        j = j * 2;
      }
    }
  }

  return result;
};
