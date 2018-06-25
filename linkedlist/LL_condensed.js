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
  //empty linked list - make the head point straight to the null
  empty()
  {
    this.head=null;
  }
  //getAt - returns node at a given index
  // head->'a'->'b'->'c'->null; getAt(1) returns 'b';
  getAt(pos)
  {
    let counter = 0;
    let node = this.head;

    if(!node) return;

    while(node)
    {
      if(counter === pos) return node;
      node = node.next;
      counter++;
    }
	}
	//removeAt(n)
	removeAt(n)
	{
    let counter = 0;
    //remove first
		if(n===0){
			this.head = this.head.next;
			return;
    }
    if(n===this.size()) n=n-1;
		let previous = this.getAt(n-1);
		if(previous) previous.next=previous.next.next; 
	}
	//insertAt(data, pos)
	insertAt(data, pos)
	{
    //pos must exit
    if(pos > this.size()) return;
		//if pos = 0
		if(pos===0)
		{
			let newnode = new Node(data);
			this.head = newnode;
			newnode = this.head.next;
			return;
    }
    //positions between first and last
    let newnode = new Node(data);
		let prev = this.getAt(pos-1);
		newnode.next = prev.next;
		prev.next=newnode;
	}
}
//get the midpoint of the list
const midpoint = (list)=>{
  let slow = list.getAt(0); //first node
  let fast = list.getAt(0); //first node
  while(slow)
  {
    if(fast.next && fast.next.next)
    {
      fast = fast.next.next;
      slow = slow.next
    } else {
      let mid;
      mid = slow; return mid;
    }
  }
}

debugger;
const nodeone = new Node(3);
const list = new linkedlist();
list.head = nodeone;
list.insertAt(-4,1);
list.insertAt(8,2);
list.insertAt(23,3);
list.insertAt(50,3);
console.log(list.size());//5
console.log(midpoint(list));//8
