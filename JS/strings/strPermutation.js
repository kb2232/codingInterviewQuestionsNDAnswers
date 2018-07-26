/*
given two strings, write algo to decide if one is a permuation of the other?
1. check that they are same length
2. check that they have same count of characters
3. return true if above passes
 */

const charMap = (str)=>{
  const mapStr = {}
  for(let char of str)
    (!mapStr[char])?mapStr[char]=1:mapStr[char]++;
  return mapStr;
}


const strPerm = (str1,str2)=>{
  const charMap1 = charMap(str1);
  const charMap2 = charMap(str2);
  if(str1.length !== str2.length)
    return false;
  else {
    for(let x in charMap1)
    {
      if(charMap1[x]!==charMap2[x])
        return false;
    }
  }
  return true;
}

console.log(strPerm("hello","dlolh"));