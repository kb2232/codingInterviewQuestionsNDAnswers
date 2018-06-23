//find palindromes
//palindrome("abba")=== true
//palindrome("abcdefg")===false
// var palind = ((str)=>{
//   //1. reverse the string
//   const original = str;
//   debugger;
//   var NewString;
//   const arr = str.split('');
//   debugger;
//   arr.reverse();
//   NewString = arr.join('');
//   debugger;
//   if (original === NewString)
//     return true;
//   else return false;
// });
//console.log(palind("baccab"));

//returns palindrome
(function(str){
  let reversed = '';
  for( let character of str)
    reversed = character + reversed;
  console.log(str===reversed);
})("abba")

