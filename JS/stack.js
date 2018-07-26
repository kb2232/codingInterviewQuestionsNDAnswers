class Stack
{
  constructor()
  {
    this.data = [];
  }
  //push
  add(record)
  {
    this.data.push(record);
  }
  //pop
  remove()
  {
    return this.data.pop();
  }
  //peek
  peek()
  {
    return this.data[this.data.length-1];
  }
}