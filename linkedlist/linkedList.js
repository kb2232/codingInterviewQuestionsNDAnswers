//node
class Node
{
  constructor(data, next=null)
  {
    this.data = data;
    this.next = next;
  }
}
class linkedlist
{
	//the three most important methods are :
	//insertAt(pos); removeAt(pos); getAt(pos);
  constructor()
  {
    //initial state
    this.head = null;
  }
  //insert element - make a new node
  insertFirst(data)
  {
    this.head = new Node(data,this.head);
  }
  //size - total nodes
  size(){
    let count =0; let node = this.head;
    while(node)
    {
      count++;
      node = node.next;
    }
    return count;
  }
  //get the first node of a linkedlist
  getFirst()
  {
    return this.head;
  }
  //get the last node
  getLast()
  {
    let node = this.head;
    while(node)
    {
      if(node.next === null) return node;
      node = node.next;
    }
  }
  //empty linked list - make the head point straight to the null
  empty()
  {
    this.head=null;
  }
  //remove first - head point should skip the first
  removeFirst()
  {
    this.head = this.head.next;
  }
  //remove last
  removeLast()
  {
    let prev = this.head;
    let node = this.head.next;
    while(node.next)
    {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }
  //INSERT last
  insertLast(data)
  {
    let newnode = new Node(data);
    let lastnode = this.getLast();
    if(lastnode)
    {
      lastnode.next = newnode;
      newnode.next = null;
    } else this.head = newnode;
  }
  //getAt - returns node at a given index
  // head->'a'->'b'->'c'->null; getAt(1) returns 'b';
  getAt(integer)
  {
    let counter = 0;
    let node = this.head;
    while(node)
    {
      if(counter === integer) return node;
      node = node.next;
      counter++;
    }
	}
	//removeAt(n)
	removeAt(n)
	{
		let counter = 0;
		if(n===0){
			this.head = this.head.next;
			return;
		}
		let previous = this.getAt(n-1);
		if(previous) previous.next=previous.next.next; 
	}
	//insertAt(data, pos)
	insertAt(data, pos)
	{
		let newnode = new Node(data);
		let prev = this.getAt(pos-1);
		newnode.next = prev.next;
		prev.next=newnode;
	}

    
}
debugger;
const nodeone = new Node(15);
const list = new linkedlist();
list.head = nodeone;
list.insertFirst(9);
list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(23);
console.log("\nfirst size=",list.size());
list.insertAt(50,2);//insert at position 2
console.log("\nnode @ position 2 after insert at pos 2 = ",list.getAt(2));//get third node
console.log("\nresize=",list.size());