class Matrix {
	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.matrix = [];

		// Initialize matrix with zeroes
		for (let i = 0; i < rows; i++) {
			this.matrix[i] = [];
			for (let j = 0; j < cols; j++) {
				this.matrix[i][j] = 0;
			}
		}
	}

	// Returns the value at the given row and column
	get(row, col) {
		return this.matrix[row][col];
	}

	// Sets the value at the given row and column
	set(row, col, value) {
		this.matrix[row][col] = value;
	}

	// Multiplies this matrix by another matrix and returns the result
	multiply(otherMatrix) {
		if (this.cols !== otherMatrix.rows) {
			throw new Error("Matrix dimensions do not match for multiplication");
		}

		const result = new Matrix(this.rows, otherMatrix.cols);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < otherMatrix.cols; j++) {
				let sum = 0;
				for (let k = 0; k < this.cols; k++) {
					sum += this.matrix[i][k] * otherMatrix.matrix[k][j];
				}
				result.matrix[i][j] = sum;
			}
		}
		return result;
	}

	// Returns a string representation of the matrix
	toString() {
		let output = "";
		for (let i = 0; i < this.rows; i++) {
			output += "[";
			for (let j = 0; j < this.cols; j++) {
				output += this.matrix[i][j];
				if (j !== this.cols - 1) {
					output += ", ";
				}
			}
			output += "]\n";
		}
		return output;
	}
}

module.export = Matrix;
