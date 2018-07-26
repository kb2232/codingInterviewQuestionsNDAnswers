// //function to find vowel
// const vowel = (str)=>{
//   //this is vowels we want to check for
//   const check = ['a','e','i','o','u'];
//   //keep track of vowels
//   var count = 0;
//   for(let char of str.toLowerCase())
//   {
//     //check if each character in string is in vowel array
//     if(check.includes(char)) count++;
//   }
//   return count;
// }

// console.log(vowel("hello there"));

//determine if a string contains a vowel
// 1. create array of vowel
// 2. use the include method to determine if it contains a vowel within a loop
// 3. increase the counter for each vowel encoutered.
// 4. return the couter

const vowel = (str)=>{
  let arr = ['a','e','i','o','u'];
  var counter = 0;
  for(let char of str)
    if(arr.includes(char)) counter++;
  return counter;
}
console.log(vowel("kunle babatunde"));