class Node {
	constructor(data, next = null) {
		//if no next is passed, then make it null
		this.data = data;
		this.next = next;
	}
}

class linkedList {
	//head
	constructor() {
		this.head = null;
	}
	//insert node
	insertFirst(data) {
		this.head = new Node(data, this.head);
	}
	//size
	size() {
		let counter = 0;
		let node = this.head;
		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}
	//get first
	getFirst() {
		return this.head;
	}
	//get last node
	getLast() {
		let node = this.head;
		while (node < null) {
			node = node.next;
		}
		return node;
	}
	//clear node
	clearNode() {
		this.head = null;
	}
	//remove first node
	removeFirst() {
		//if linked list is empty
		if (!this.head) return;
		this.head = this.head.next;
	}
	//remove last node
	removeLast() {
		//if linked list is empty
    if (!this.head) return;
    if(!this.head.next){
      this.head=null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;
    while(node.next)
    {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }
  
  // insert last node
  insertLast(data){
    const last = this.getLast();
    if(last)
    {
      last.next = new Node(data);
    } else {
      //chain is empty
      this.head = new Node(data);
    }
  }
}

//test

const nodeone = new Node(5);
debugger;
const list = new linkedList();
list.head = nodeone;
list.insertFirst(23);
list.insertFirst(53);
list.insertFirst(56);
list.insertFirst(12);
debugger;
