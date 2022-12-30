/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	let sStack = [];
	let tStack = [];

	let i = 0,
		j = 0;
	while (i < s.length || j < t.length) {
		while (s[i] === "#") {
			if (sStack.length > 0) sStack.pop();
			i++;
		}

		while (t[j] === "#") {
			if (tStack.length > 0) tStack.pop();
			j++;
		}

		if (i < s.length) {
			sStack.push(s[i]);
			i++;
		}
		if (j < t.length) {
			tStack.push(t[j]);
			j++;
		}
	}

	if (sStack.join("") !== tStack.join("")) return false;

	return true;
};

const result = backspaceCompare("xywrrmp", "xywrrmu#p");

console.log(result);
