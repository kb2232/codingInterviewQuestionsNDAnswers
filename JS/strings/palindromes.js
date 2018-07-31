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
// (function(str){
//   let reversed = '';
//   for( let character of str)
//     reversed = character + reversed;
//   console.log(str===reversed);
// })("abba")

/**
 * 1. reverse the string
 * 2. check if the str and it's reverse equal
 */

const Palindrome = function(str){
  this.str = str;
  this.getRev = function(){
    return this.str.split('').reverse().join('');
  };
 }

 Palindrome.prototype.getPrint = function(){
   console.log(this.str===this.getRev());
 }

 let str = "abba";
 let test = new Palindrome(str);
 test.getPrint();
