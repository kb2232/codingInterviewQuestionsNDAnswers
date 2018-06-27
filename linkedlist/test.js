//linkedlist
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
class linkedlist {
	constructor() {
		this.head = null;
	}

	size() {
		let node = this.head;
		let counter = 0;
		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}
	//empties the node
	empty() {
		this.head = null;
	}
	//test if it's empty
	isEmpty() {
		if (this.head === null) return true;
		else return false;
	}
	//get node at pos
	/*
    0. empty node
    1. if pos = 0
    2. if pos = size of list
    3. if pos is in between
  */
	getAt(pos) {
		//case for empty node
		if (this.isEmpty()) return null;
		else {
			//pos = 0
			if (pos === 0) return this.head;
			let node = this.head;
			let count = 0;
			while (node) {
				node = node.next;
				count++;
				if (pos === count) return node;
			}
		}
	}
	//removeAt(pos)
	/*
    0. empty node
    1. if pos = 0
    2. if pos = size of list
    3. if pos is in between
  */
	removeAt(pos) {
		//empty node
		if (this.isEmpty()) return;
		else {
      //pos = 0;
      
		}
	}
}
