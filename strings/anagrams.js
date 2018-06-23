// //helper function to build char map
// const charMap = (str)=>{
//   //match only characters and make lowercase
//   const str_ = str.replace(/[\W]/g,'').toLowerCase();
//   //create a character map for str
//   let charMap_ = {};
//   for(let char of str_)
//   {
//     if(!charMap_[char]) charMap_[char]=1;
//     else charMap_[char]++;
//   }
//   return charMap_;
// }

// function anagram(strA, strB) {
//   const charmapA = charMap(strA);
//   const charmapB = charMap(strB);
//   //check the length
//   if(Object.keys(charmapA).length !== Object.keys(charmapB).length)
//     return false;
//   //iterate  charmap to check equal characters
//   for(let char in charmapA)
//   {
//     if(charmapA[char] !== charmapB[char])
//       return false;
//   }
//   return true;
// }

// console.log(anagram("rail safety","!fairy tales"));

//given strA = "rail safety", strB = "!fairy tales"
//both are anagrams if you can re-write both to do the same thing

//1. remove all other characters!!! and return both
const stripChar =(str) => {
  return str.replace(/[\W]/g,'').toLowerCase();
}
//2. make objects of each str
const obj = (str) => {
  let charMap = {}
  //check if it's empty
  //else increase key count
  for(let char of stripChar(str)) {
    if(!charMap[char])
      charMap[char] = 1;
    else charMap[char]++;
  }
  return charMap;
}
// 3. check if length mathes and if the char count in the map matches
const anagrams = (strA, strB)=>{
  if(Object.keys(obj(strA)).length !== Object.keys(obj(strB)).length)
    return false;
  for(let char in obj(strA))
  {
    if(obj(strA)[char]!==obj(strB)[char])
      return false;
  }
  return true;
}

console.log(anagrams("rail safety","!fairy tales"));