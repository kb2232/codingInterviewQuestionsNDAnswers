/*
"helo"==>true
"hello"==>false
*/
const isUnique = (str)=>{
  let obj = {};
  for(let char of str)
  {
    if(!obj[char]) obj[char]=1;
    else obj[char]++;
  }
  for(let x in obj)
    if(obj[x] > 1) return false;
  return true;
}
console.log(isUnique("abcdefghijklmnopqrstauvwxyz"));