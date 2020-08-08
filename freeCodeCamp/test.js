let result = [];

function steamrollArray(arr) {
	if (typeof arr !== typeof []) return [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] != undefined) steamrollArray(arr[i]);
		else result.push(arr[i]);
	}
}

console.log(steamrollArray([[["a"]], [["b"]]]));
