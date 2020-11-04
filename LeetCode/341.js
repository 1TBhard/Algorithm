/* 341. Flatten Nested List Iterator */
// Runtime: 108 ms, faster than 60.53%
// 주어진 문제에 어떻게 사용할지에 대한 문제

var NestedIterator = function(nestedList) {
  this.arr = [];

  const loop = subArr => {
    for(var item of subArr) {
      if(item.isInteger()) this.arr.push(item.getInteger());
      else  loop(item.getList());
    }
  }
  loop(nestedList);
};


NestedIterator.prototype.hasNext = function() {
  return this.arr.length > 0;
};

NestedIterator.prototype.next = function() {
  return this.arr.shift();
};
