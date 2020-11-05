function chunkArrayInGroups(arr, size) {
	let buffer = [];
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if ((i + 1) % size == 0) {
			result.push([...buffer, arr[i]]);
			buffer = [];
		} else {
			buffer.push(arr[i]);
		}
	}

	if (buffer.length != 0) {
		result.push([...buffer]);
	}

	return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
