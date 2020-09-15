/* =============================== 895. Maximum Frequency Stack =============================== */
var FreqStack = function() {
  this.hash = {};             // 스택이 가지고 있는 해당 값의 개수
  this.frequency = {};        // 키:[] => 키만큼의 빈도수를 가진 숫자 즉, 같은 빈도면 빠져나갈 숫자 순
  this.many_idx = 1;          // 최대 많이 가지고 있는 개수
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {

  if(x in this.hash) {
    this.hash[x]++;

  } else {
    this.hash[x] = 1;
  }

  if(this.hash[x] in this.frequency)
      this.frequency[this.hash[x]].push(x)
  else {
    this.frequency[this.hash[x]] = [x];
  }

  this.many_idx = Math.max(this.hash[x], this.many_idx)

  // 가장 많은 개수 설정
	return null;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const result = this.frequency[this.many_idx].pop();

  if(this.frequency[this.many_idx].length === 0) {
    // 빈 배열은 지움
    delete this.frequency[this.many_idx];

    // 최대 개수 값 마이너스
    this.many_idx--;
  }
  
  // 빠진 값은 개수에서 마이너스
  this.hash[result]--;

  return result;
};

/*
Runtime: 368 ms, faster than 78.48% of JavaScript online submissions for Maximum Frequency Stack.
Memory Usage: 57.5 MB, less than 40.51% of JavaScript online submissions for Maximum Frequency Stack.
*/