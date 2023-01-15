export class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left ?? null;
		this.right = right ?? null;
	}
}

export function makeTest(arr) {
	const head = new TreeNode(arr.shift());

	let q = [head];
	const copyArr = [...arr];

	while (copyArr.length > 0) {
		const targetNode = q.shift();

		const leftVal = copyArr?.shift();
		const left = leftVal ? new TreeNode(leftVal) : null;
		targetNode.left = left;

		q.push(left);

		const rightVal = copyArr?.shift();
		const right = rightVal ? new TreeNode(rightVal) : null;
		targetNode.right = right;
		q.push(right);
	}

	return head;
}
