function chunks(arr, size)
{
  let chunked = [];
  for(let element of arr)
  {
    //get last element in chunked array
    debugger;
    const last = chunked[chunked.length-1];
    debugger;
    if(!last || last.length===size)
      chunked.push([element]);
    else last.push(element);//if chunked not yet full
  }
  debugger;
  return chunked;
}

const arr = [1,12,3,24,5,0,4];
console.log(chunks(arr,2));

/*
parameters arr, size
  1. create empty array arr2 []
  2. create chunked array within arr2, arr3 = arr2[aar2.length-1]
  3. if arr2 is empty or its arr3.length===size, push [element] into arr2
      else it means we have not yet reached lenght so push to arr3
*/