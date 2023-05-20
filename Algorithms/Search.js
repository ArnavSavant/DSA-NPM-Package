/**
 * BinarySearch class represents a binary search algorithm.
 */
class Search {

	search(arr, target) {
		let left = 0;
		let right = arr.length - 1;

		while (left <= right) {
			const mid = Math.floor((left + right) / 2);

			if (arr[mid] === target) {
				return mid; // Target found at index mid.
			}

			if (arr[mid] < target) {
				left = mid + 1; // Target is in the right half.
			} else {
				right = mid - 1; // Target is in the left half.
			}
		}

		return -1; // Target not found in the array.
	}
}

module.exports = Search;
