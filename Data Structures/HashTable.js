class HashTable {
	constructor() {
		this.table = new Array(1000); // Array to hold the key-value pairs
	}

	// Generate a hash code for the given key
	hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % this.table.length;
	}

	// Add a key-value pair to the hash table
	put(key, value) {
		const index = this.hash(key);
		if (!this.table[index]) {
			this.table[index] = [];
		}
		for (let i = 0; i < this.table[index].length; i++) {
			const pair = this.table[index][i];
			if (pair[0] === key) {
				pair[1] = value;
				return;
			}
		}
		this.table[index].push([key, value]);
	}

	// Get the value associated with the given key
	get(key) {
		const index = this.hash(key);
		if (!this.table[index]) {
			return undefined;
		}
		for (let i = 0; i < this.table[index].length; i++) {
			const pair = this.table[index][i];
			if (pair[0] === key) {
				return pair[1];
			}
		}
		return undefined;
	}

	// Remove the key-value pair associated with the given key
	remove(key) {
		const index = this.hash(key);
		if (!this.table[index]) {
			return undefined;
		}
		for (let i = 0; i < this.table[index].length; i++) {
			const pair = this.table[index][i];
			if (pair[0] === key) {
				this.table[index].splice(i, 1);
				return pair[1];
			}
		}
		return undefined;
	}
}

module.export = HashTable;
