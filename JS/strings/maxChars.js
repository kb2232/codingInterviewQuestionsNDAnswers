/**
 * 1. generate key and value 
 * 2. set max, and character, if key is greate than max then max = key and character = value
 * 3. print max and character
 * 
 */

const maxChar = ((str)=>
{
 let obj = {};
 for(let char of str)
   (!obj[char])?obj[char]=1:obj[char]++;
 let max = 0;
 let character = '';
 for(let char in obj)
 {
   if(obj[char] >= max)
   {
     max = obj[char];
     character = char;
   }
 }
 console.log(character," appears ",max," times.");
})("#%he3#33ll#l#o")