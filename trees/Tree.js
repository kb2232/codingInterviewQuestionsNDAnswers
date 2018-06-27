class Node
{
  constructor(data)
  {
    this.data = data;
    this.children = [];
  }
  //Add 
  add(data)
  {
    const node = new Node(data);
    this.children.push(node);
  }
}