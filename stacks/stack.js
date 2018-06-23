//stack
class STACK 
{
  //initialize
  constructor()
  {
    this.arr = [];
  }
  //add to stack
  add(data)
  {
    this.arr.push(data);
  }
  //remote from stack
  remove()
  {
    return this.arr.pop();
  }
  //print the stack
  print()
  {
    console.log('-----');
    for(let i = this.arr.length-1; i >=0; i--)
      console.log('|',this.arr[i],'|');
    console.log('-----');
  }
  //peek last element
  peek()
  {
    return this.arr[this.arr.length-1];
  }
  //check if empty
  empty()
  {
    if(this.arr.length===0)
      return true;
    else
      return false;
  }
}

// obj = new STACK();

// obj.add('A');

// obj.add('B'); 

// obj.add('K');

// obj.print();
// obj.remove();

// obj.print();

//REVERSE A STRING USING STACK
//("hello")=>("olleh")
// const stackRevStr = (str)=>{
//   obj = new STACK();
//   for(let char of str)
//     obj.add(char);
//   let newStr = [];
//   for(let char of str)
//     newStr.push(obj.remove())
//   console.log(newStr.join(''));
// }
// stackRevStr('babatunde hello');

//Use stack to check for balanced paranthesis
const balanceParantheses = (str)=>{
  obj = new STACK();
  for(let char of str)
  {
    if(char==='[' || char==='{' || char ==='(')
      obj.add(char);
    else {
      switch(char)
      {
        case(']'):
          if(obj.empty())
            return false;
          else if(obj.peek()!=='[') {
            return false
          } else obj.remove();
          break;
        case(')'):
          if(obj.empty())
            return false;
          else if(obj.peek()!=='(') {
            return false
          } else obj.remove();
          break;
        case('}'):
          if(obj.empty())
            return false;
          else if(obj.peek()!=='{') {
            return false
          } else obj.remove();
          break;
      }
    }
  }
  return true;
}

console.log(balanceParantheses("[()]{}{[()()]()}"));