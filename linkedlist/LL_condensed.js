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
  //empties the node
  empty()
  {
    this.head = null;
  }
  //test if it's empty
  isEmpty()
  {
    if(this.head===null) return true;
    else return false;
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
      slow = slow.next;
    } else {
      let mid;
      mid = slow; return mid;
    }
  }
}
//circular list test
const circularList = (list)=>{
  let slow = list.getAt(0); //first node
  let fast = list.getAt(0); //first node
  while(slow)
  {
    if(fast.next && fast.next.next)
    {
      fast = fast.next.next;
      slow = slow.next;
    }
    if(slow === fast) return true;
  }
  return false;
} 
//return K-th node from the last
const kthNode = (k)=>{
  let slow = list.getAt(0); //first node
  let fast = list.getAt(0); //first node
  //move fast by k
  let i = 0;
  while(i < k)
  {
    fast = fast.next;
  }
  //advance slow and fast by one
  while(slow)
  {
    slow = slow.next;
    fast = fast.next;
    //check if fast is at last element
    if(fast.next===null) return slow;
  }
}
//remove duplicates
const rmDuplicates = (list)=>{
  let slow = list.getAt(0); let fast = list.getAt(0);
  let countS = 0; let countF=0;
  while(slow)
  {
    countS++;
    countF = 1 + countS;
    while(fast)
    {
      countF++;
      if(fast===slow) list.removeAt(countF);
      fast = fast.next;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
}


debugger;
const nodeone = new Node(9);
const list = new linkedlist();
list.head = nodeone;
list.insertAt(3,1);
list.insertAt(-2,2);
list.insertAt(1,3);
list.insertAt(7,3);
list.insertAt(0,4);
console.log(list.size());//6
console.log(midpoint(list));//-2
console.log(kthNode(list));//1
