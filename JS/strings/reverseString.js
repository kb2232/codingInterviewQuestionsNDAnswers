//given a string
//reverse it
//reverse('apple')==='elppa';


// (function(str){
//   //turn into array
//   const arr = str.split('');
//   //reverse
//   arr.reverse();
//   //make into string and return
//   console.log(arr.join(''));
// })("babatunde")

//solution 2

function reverse(str)
{
  //create empty string
  let reversed = '';
  //loop thru each character
  debugger;
  for(let character of str)
  {
    reversed = character + reversed;
  }
  return reversed;
}

console.log(reverse("hello"));