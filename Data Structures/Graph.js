class Graph {
	constructor() {
		this.adjacencyList = new Map();
	}

	addVertex(vertex) {
		if (!this.adjacencyList.has(vertex)) {
			this.adjacencyList.set(vertex, []);
		}
	}

	addEdge(vertex1, vertex2) {
		if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
			const vertex1Edges = this.adjacencyList.get(vertex1);
			const vertex2Edges = this.adjacencyList.get(vertex2);
			if (!vertex1Edges.includes(vertex2)) {
				vertex1Edges.push(vertex2);
			}
			if (!vertex2Edges.includes(vertex1)) {
				vertex2Edges.push(vertex1);
			}
		}
	}

	removeVertex(vertex) {
		if (this.adjacencyList.has(vertex)) {
			const vertexEdges = this.adjacencyList.get(vertex);
			for (const adjacentVertex of vertexEdges) {
				const adjacentVertexEdges = this.adjacencyList.get(adjacentVertex);
				const index = adjacentVertexEdges.indexOf(vertex);
				adjacentVertexEdges.splice(index, 1);
			}
			this.adjacencyList.delete(vertex);
		}
	}

	removeEdge(vertex1, vertex2) {
		if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
			const vertex1Edges = this.adjacencyList.get(vertex1);
			const vertex2Edges = this.adjacencyList.get(vertex2);
			const index1 = vertex1Edges.indexOf(vertex2);
			const index2 = vertex2Edges.indexOf(vertex1);
			if (index1 !== -1) {
				vertex1Edges.splice(index1, 1);
			}
			if (index2 !== -1) {
				vertex2Edges.splice(index2, 1);
			}
		}
	}

	depthFirstTraversal(startVertex, visited = new Set()) {
		visited.add(startVertex);
		const edges = this.adjacencyList.get(startVertex);
		for (const vertex of edges) {
			if (!visited.has(vertex)) {
				this.depthFirstTraversal(vertex, visited);
			}
		}
		return visited;
	}

	breadthFirstTraversal(startVertex) {
		const visited = new Set([startVertex]);
		const queue = [startVertex];
		while (queue.length > 0) {
			const vertex = queue.shift();
			const edges = this.adjacencyList.get(vertex);
			for (const adjacentVertex of edges) {
				if (!visited.has(adjacentVertex)) {
					visited.add(adjacentVertex);
					queue.push(adjacentVertex);
				}
			}
		}
		return visited;
	}
}

module.export = Graph;