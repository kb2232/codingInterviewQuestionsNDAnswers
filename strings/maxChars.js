((str)=>{
  //create empty object
  let objChar = {};
  for(let i of str)
  {
    debugger;
    //check for empty objChar
    if(!objChar[i])
      objChar[i] = 1;
    else objChar[i]++;
  }
  //keep count
  var max = 0;
  //keep track of character that appears more
  var maxChar = '';
  for(let j in objChar)
  {
    if(objChar[j]>max)
    {
      max = objChar[j];
      maxChar = j;
    }
  }
  console.log(maxChar+" appears the "+max+" times");
})("hello111")