class MinHeap {
	constructor() {
		this.heap = [];
	}

	// Get the index of the left child of the node at the given index
	getLeftChildIndex(parentIndex) {
		return 2 * parentIndex + 1;
	}

	// Get the index of the right child of the node at the given index
	getRightChildIndex(parentIndex) {
		return 2 * parentIndex + 2;
	}

	// Get the index of the parent of the node at the given index
	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	// Check if the node at the given index has a left child
	hasLeftChild(index) {
		return this.getLeftChildIndex(index) < this.heap.length;
	}

	// Check if the node at the given index has a right child
	hasRightChild(index) {
		return this.getRightChildIndex(index) < this.heap.length;
	}

	// Check if the node at the given index has a parent
	hasParent(index) {
		return this.getParentIndex(index) >= 0;
	}

	// Get the left child of the node at the given index
	leftChild(index) {
		return this.heap[this.getLeftChildIndex(index)];
	}

	// Get the right child of the node at the given index
	rightChild(index) {
		return this.heap[this.getRightChildIndex(index)];
	}

	// Get the parent of the node at the given index
	parent(index) {
		return this.heap[this.getParentIndex(index)];
	}

	// Swap the values at the two given indices in the heap
	swap(indexOne, indexTwo) {
		const temp = this.heap[indexOne];
		this.heap[indexOne] = this.heap[indexTwo];
		this.heap[indexTwo] = temp;
	}

	// Get the minimum element in the heap (the root)
	peek() {
		if (this.heap.length === 0) return undefined;

		return this.heap[0];
	}

	// Remove and return the minimum element in the heap (the root)
	poll() {
		if (this.heap.length === 0) return undefined;

		const minElement = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.heapifyDown();
		return minElement;
	}

	// Add an element to the heap
	add(element) {
		this.heap.push(element);
		this.heapifyUp();
	}

	// Move the node at the given index up the heap as needed to maintain the heap property
	heapifyUp(index = this.heap.length - 1) {
		let currentIndex = index;
		while (
			this.hasParent(currentIndex) &&
			this.parent(currentIndex) > this.heap[currentIndex]
		) {
			const parentIndex = this.getParentIndex(currentIndex);
			this.swap(parentIndex, currentIndex);
			currentIndex = parentIndex;
		}
	}

	// Move the node at the given index down the heap as needed to maintain the heap property
	heapifyDown(index = 0) {
		let currentIndex = index;
		while (this.hasLeftChild(currentIndex)) {
			let smallerChildIndex = this.getLeftChildIndex(currentIndex);
			if (
				this.hasRightChild(currentIndex) &&
				this.rightChild(currentIndex) < this.leftChild(currentIndex)
			) {
				smallerChildIndex = this.getRightChildIndex(currentIndex);
			}

			if (this.heap[currentIndex] < this.heap[smallerChildIndex]) break;

			this.swap(currentIndex, smallerChildIndex);
			currentIndex = smallerChildIndex;
		}
	}

	// Check if the heap is empty
	isEmpty() {
		return this.heap.length === 0;
	}

	// Get the size of the heap
	size() {
		return this.heap.length;
	}

	// Convert the heap to an array
	toArray() {
		return [...this.heap];
	}
}

module.export = MinHeap;
