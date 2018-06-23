/*
replace " " with '%20'
input: ("Mr John Smith ", 13);
output: Mr%20John@20Smith
 */
const URLify = (str,n)=>{
  let newStr = "";
  for(let x=0; x<n; x++)
  {
    if(str[x]===" ")
      newStr +='%20';
    else newStr += str[x];
  }
  console.log(newStr);
}
URLify("Mr John Smith",13);
