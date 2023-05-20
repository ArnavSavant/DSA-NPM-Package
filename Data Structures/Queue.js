class Queue {
	constructor() {
		this.items = [];
		this.front = 0;
		this.rear = 0;
	}

	// Add element to the back of the queue
	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}

	// Remove and return the front element from the queue
	dequeue() {
		if (this.front === this.rear) return undefined;

		const removedElement = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return removedElement;
	}

	// Return the front element from the queue
	peek() {
		if (this.front === this.rear) return undefined;

		return this.items[this.front];
	}

	// Check if the queue is empty
	isEmpty() {
		return this.front === this.rear;
	}

	// Return the number of elements in the queue
	size() {
		return this.rear - this.front;
	}

	// Clear all the elements from the queue
	clear() {
		this.items = [];
		this.front = 0;
		this.rear = 0;
	}

	// Return an array of all the elements in the queue
	toArray() {
		return this.items.slice(this.front, this.rear);
	}
}

module.exports = Queue;