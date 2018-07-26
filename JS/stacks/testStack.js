//create stack
// push, pop, and stackMin() -returns min element
class stack
{
  constructor()
  {
    this.arr = [];
  }
  add(data)
  {
    this.arr.push(data);
  }
  remove()
  {
    return this.arr.pop();
  }
  //stack min
  stackMin()
  {
    let min = 10000000;
    for(let x=0; x<this.arr.length; x++)
    {
      let s = this.remove();
      if(s <= min)
        min = s;
    }
    return min;
  }
}

const S = new stack();
S.add(23);S.add(9);S.add(2);S.add(3);S.add(57);
console.log(S.stackMin());