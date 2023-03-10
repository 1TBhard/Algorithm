var connect = function (root) {
	let q = [root];

	while (q.length) {
		const len = q.length;
		for (let i = 0; i < len; i++) {
			let node = q.shift();

			// node에 null이 왜...?
			if (node === null) continue;

			if (i < len - 1) {
				node.next = q[0];
			}

			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}
	}

	return root;
};

class TreeNode {
	constructor(val, left, right, next) {
		this.val = val === undefined ? 0 : val;
		this.left = left ?? null;
		this.right = right ?? null;
		this.next = next ?? null;
	}
}

function makeTest(arr) {
	const head = new TreeNode(arr.shift());

	let q = [head];
	const copyArr = [...arr];

	while (copyArr.length > 0) {
		const targetNode = q.shift();

		const leftVal = copyArr?.shift();
		const left = leftVal !== undefined ? new TreeNode(leftVal) : null;
		targetNode.left = left;

		q.push(left);

		const rightVal = copyArr?.shift();
		const right = rightVal ? new TreeNode(rightVal) : null;
		targetNode.right = right;
		q.push(right);
	}

	return head;
}

const tree = makeTest([1, 2, 3, 4, 5, null, 7]);

connect(tree);
