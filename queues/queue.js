//queue - implement
class QUEUE 
{
  constructor()
  {
    this.arr = [];
  }
  //add data
  add(data)
  {
    this.arr.unshift(data);
  }
  //remove
  remove()
  {
    this.arr.pop();
  }
  //print
  print()
  {
    console.log('-----');
    for(let i = this.arr.length-1; i >=0; i--)
      console.log('|',this.arr[i],'|');
    console.log('-----');
  } 
  //peek
  peek()
  {
    return this.arr[this.arr.length-1];
  }
  //check for empty
  empty()
  {
    if(this.arr.length===0) return true;
    else return false;

  }
}

//weave function...take two queues as argument and combine the contents into a third queue
const weave = (q1, q2)=>{
  q3 = new QUEUE();
  while(!q1.empty() || !q2.empty())
  {
    if(q1.peek()) q3.add(q1.remove());
    if(q2.peek()) q3.add(q2.remove());
  }
  return q3;
}