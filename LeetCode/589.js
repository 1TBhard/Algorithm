/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// 순환
var preorder = function (root) {
	if (!root) return [];

	let result = [];

	result.push(root.val);

	for (let node of root.children) {
		result = result.concat([...preorder(node)]);
	}

	return result;
};

// 반복을 이용
var preorder = function (root) {
	const answer = root === null ? [] : [root.val];
	let q = root?.children;

	while (q?.length) {
		const node = q.shift();

		answer.push(node.val);

		if (node.children?.length > 0) {
			q = [...node.children, ...q];
		}
	}

	return answer;
};
