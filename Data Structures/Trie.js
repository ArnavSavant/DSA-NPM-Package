class TrieNode {
	constructor() {
		this.children = new Map(); // Map of child nodes
		this.isEndOfWord = false; // Indicates if this node represents the end of a word
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode(); // Root node of the trie
	}

	// Inserts a word into the trie
	insert(word) {
		let currentNode = this.root;
		for (let i = 0; i < word.length; i++) {
			const char = word[i];
			if (!currentNode.children.has(char)) {
				currentNode.children.set(char, new TrieNode());
			}
			currentNode = currentNode.children.get(char);
		}
		currentNode.isEndOfWord = true;
	}

	// Searches for a word in the trie
	search(word) {
		let currentNode = this.root;
		for (let i = 0; i < word.length; i++) {
			const char = word[i];
			if (!currentNode.children.has(char)) {
				return false;
			}
			currentNode = currentNode.children.get(char);
		}
		return currentNode.isEndOfWord;
	}

	// Checks if the trie contains a word that starts with the given prefix
	startsWith(prefix) {
		let currentNode = this.root;
		for (let i = 0; i < prefix.length; i++) {
			const char = prefix[i];
			if (!currentNode.children.has(char)) {
				return false;
			}
			currentNode = currentNode.children.get(char);
		}
		return true;
	}
}

module.export = Trie;
