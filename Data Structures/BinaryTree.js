class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
			return this;
		}

		let current = this.root;

		while (true) {
			if (!current.left) {
				current.left = newNode;
				return this;
			} else if (!current.right) {
				current.right = newNode;
				return this;
			} else {
				current = current.left;
			}
		}
	}

	find(value) {
		if (!this.root) return false;
		let current = this.root;
		let found = false;

		while (current && !found) {
			if (value === current.value) {
				found = true;
			} else if (value < current.value) {
				current = current.left;
			} else {
				current = current.right;
			}
		}

		if (!found) return false;
		return current;
	}

	bfs() {
		let node = this.root;
		const queue = [];
		const data = [];

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return data;
	}

	dfsPreOrder() {
		const data = [];

		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);

		return data;
	}

	dfsPostOrder() {
		const data = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}

		traverse(this.root);

		return data;
	}

	dfsInOrder() {
		const data = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);

		return data;
	}
}

module.exports = BinaryTree;