/**
 * QuickSort class represents the Quick Sort algorithm.
 */
class Sort {
	sort(arr) {
		if (arr.length <= 1) {
			return arr; // Base case: array is already sorted or empty.
		}

		const pivot = arr[Math.floor(arr.length / 2)];
		const lesser = [];
		const greater = [];

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < pivot) {
				lesser.push(arr[i]); // Elements smaller than the pivot go to the "lesser" array.
			} else if (arr[i] > pivot) {
				greater.push(arr[i]); // Elements greater than the pivot go to the "greater" array.
			}
		}

		return [...this.sort(lesser), pivot, ...this.sort(greater)]; // Recursively sort "lesser" and "greater" arrays.
	}
}

module.exports = Sort;
