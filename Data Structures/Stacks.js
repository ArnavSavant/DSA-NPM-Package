class Stack {
	constructor() {
		this.items = [];
		this.count = 0;
	}

	// Add element to the stack
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}

	// Remove and return the last added element from the stack
	pop() {
		if (this.count === 0) return undefined;

		this.count--;
		const removedElement = this.items[this.count];
		delete this.items[this.count];
		return removedElement;
	}

	// Return the last added element from the stack
	peek() {
		return this.items[this.count - 1];
	}

	// Check if the stack is empty
	isEmpty() {
		return this.count === 0;
	}

	// Return the number of elements in the stack
	size() {
		return this.count;
	}

	// Clear all the elements from the stack
	clear() {
		this.items = [];
		this.count = 0;
	}

	// Return an array of all the elements in the stack
	toArray() {
		return this.items.slice(0, this.count);
	}
}

module.export = Stack;