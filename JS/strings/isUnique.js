/*
"helo"==>true
"hello"==>false
*/
/*
"helo"==>true
"hello"==>false
1. GENERATE key and value map
2. if key count is > 1 then return false
3. return true at the end
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