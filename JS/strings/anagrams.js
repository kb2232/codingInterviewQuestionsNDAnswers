//write an anagram code
// 1. check length of both strings - return false if not equal
// 1b. remove unnecessary 
// 2. make key value map of each string
// 3. count all keys to make sure that are equal

const stripSTR = (str)=>{
  return (
    str.replace(/[\W]/g,'').toLowerCase()
  );
}

const charMap = (str)=>{
  const charmap = {};

  for(let char of str)
    (!charmap[char])?charmap[char]=1:charmap[char]++;

  return charmap;
}

const anagram = (str1, str2)=>{
   str1 = stripSTR(str1);
   str2 = stripSTR(str2);
  if(str1.length !== str2.length) return false;

  if(Object.keys(charMap(str1)).length !== Object.keys(charMap(str2)).length) return false;
  for(let x in charMap(str1))
    if(charMap(str1)[x]!==charMap(str2)[x]) return false;
  
  return true;
}

console.log(anagram("rail kjfety","!f%airy tales"));


// Here is a simple algorithm:
// 1. Remove all unnecessary characters
// 2. make objects of each character
// 3. check to see if object length matches and character count matches - then return true
// const stripChar = str => {
// 	return str.replace(/[\W]/g, '').toLowerCase();
// };
// const charMap = str => {
// 	let MAP = {};
// 	for (let char of stripChar(str)) {
// 		!MAP[char] ? (MAP[char] = 1) : MAP[char]++;
// 	}
// 	return MAP;
// };
// const anagram = (str1, str2) => {
//   if(Object.keys(charMap(str1)).length!==Object.keys(charMap(str2)).length) return false;
//   for(let char in charMap(str1))
//   {
//     if(charMap(str1)[char]!==charMap(str2)[char]) return false;
//   }
//   return true;
// };

// console.log(anagram("rail safety","!f%airy tales"));
