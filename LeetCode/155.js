// push할 때 해당 index까지 넣을 때의 최소값 정보도 넣기

class Node {
	constructor(val, min) {
		this.val = val;
		this.min = min;
	}
}

var MinStack = function () {
	this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	if (this.stack.length === 0) {
		this.stack.push(new Node(val, val));
		return;
	}

	this.stack.push(new Node(val, this.getMin() > val ? val : this.getMin()));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	return this.stack.pop().val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.stack[this.stack.length - 1].min;
};
