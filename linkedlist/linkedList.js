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

    
}
debugger;
const nodeone = new Node(15);
const list = new linkedlist();
list.head = nodeone;
list.insertFirst(9);
list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(23);
console.log("first = ",list.getFirst());
console.log("\nlast = ",list.getLast());
console.log("\nsize=",list.size());
list.insertLast(100);
console.log("\nNew last =",list.getLast());
console.log("\nnew size=",list.size());
list.removeFirst(); //remove first
console.log("\nnew first = ",list.getFirst());//should be different from above
list.removeLast(); //remove last
console.log("\nnew last = ",list.getLast());//should be different from above
list.empty(); //empty list
console.log("\nnew size=",list.size());//// should give zero
debugger;