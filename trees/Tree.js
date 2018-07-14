class Node
{
  constructor(data)
  {
    this.data = data;
    this.children = [];
  }
  //Add a new child
  add(data)
  {
    const node = new Node(data);
    this.children.push(node);
  }
  //remove a child
  remove(data)
  {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  //breadth first search BFS
  BFS(Fn) {

  }
  //depth first search
  DFS() {

  }
}

module.exports = { Node, Tree};