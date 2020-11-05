function solution(pobi, crong) {
	const chekcError = (hol, zzak) => {
		const errorPage = Math.abs(hol - zzak) !== 1;

		return errorPage;
	};

	const makeBig = (str) => {
		str = String(str)
			.split("")
			.map((x) => parseInt(x));
		const sum = str.reduce((acc, cur) => acc + cur, 0);
		const mul = str.reduce((acc, cur) => acc * cur, 1);

		return Math.max(sum, mul);
	};

	const compareLeftRight = ([left, right]) => {
		if (chekcError(left, right)) return -1;
		return Math.max(makeBig(left), makeBig(right));
	};

	const pobiBig = compareLeftRight(pobi);
	const crongBig = compareLeftRight(crong);

	if (pobiBig === -1 || crongBig === -1) return -1;

	if (pobiBig > crongBig) return 1;
	else if (pobiBig < crongBig) return 2;
	else return 0;
}

console.log(solution([97, 98], [197, 198]));
console.log(solution([131, 132], [211, 212]));
console.log(solution([99, 102], [211, 212]));
console.log(solution([101, 102], [99, 100]));
