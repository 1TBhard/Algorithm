var Trie = function () {
	this.queue = [];
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	this.queue.push(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	return !!this.queue.find((item) => item === word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	const regex = new RegExp(`^${prefix}`);
	return this.queue.some((item) => regex.test(item));
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
