class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	append(data) {
		const newNode = new Node(data);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
	}

	prepend(data) {
		const newNode = new Node(data);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	insert(index, data) {
		if (index < 0 || index > this.length) {
			return false;
		}
		if (index === 0) {
			this.prepend(data);
			return true;
		}
		if (index === this.length) {
			this.append(data);
			return true;
		}
		const newNode = new Node(data);
		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		leader.next = newNode;
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}
		if (index === 0) {
			const removedNode = this.head;
			this.head = removedNode.next;
			this.head.prev = null;
			removedNode.next = null;
			this.length--;
			return removedNode;
		}
		if (index === this.length - 1) {
			const removedNode = this.tail;
			this.tail = removedNode.prev;
			this.tail.next = null;
			removedNode.prev = null;
			this.length--;
			return removedNode;
		}
		const leader = this.traverseToIndex(index - 1);
		const removedNode = leader.next;
		const follower = removedNode.next;
		leader.next = follower;
		follower.prev = leader;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}

	traverseToIndex(index) {
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	}

	toArray() {
		const nodes = [];
		let current = this.head;
		while (current) {
			nodes.push(current.data);
			current = current.next;
		}
		return nodes;
	}
}

module.exports = DoublyLinkedList;