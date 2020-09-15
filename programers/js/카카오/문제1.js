function solution(new_id) {
	// step 1
	new_id = new_id.toLowerCase();

	// step 2
	new_id = new_id.replace(/[^\.\-_\w\d]/g, "");

	// step 3
	new_id = new_id.replace(/\.{2,}/g, ".");

	// step 4
	if (new_id[0] === ".") new_id = new_id.substring(1, new_id.length);
	if (new_id[new_id.length - 1] === ".")
		new_id = new_id.substring(0, new_id.length - 1);

	// step 5
	if (new_id === "") new_id = "a";

	// step 6
	if (new_id.length >= 16) {
		new_id = new_id.substring(0, 15);
		if (new_id[new_id.length - 1] === ".") new_id = new_id.substring(0, 14);
	}

	// step 7
	while (new_id.length <= 2) {
		new_id += new_id[new_id.length - 1];
	}

	return new_id;
}

solution("...!@BaT#*..y.abcdefghijklm");
