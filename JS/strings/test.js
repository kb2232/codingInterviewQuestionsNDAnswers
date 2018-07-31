//find palindromes
//palindrome("abba")=== true
//palindrome("abcdefg")===false

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
