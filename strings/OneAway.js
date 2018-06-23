const map = (str)=>{
  let charMap = {};
  for(let char of str)
    (!charMap[char])?charMap[char]=1:charMap[char]++;
  return charMap;
}

const OneAway = (str1,str2)=>
{
  //check if strings are identical
  if(str1===str2) return false;
  //check if their length differences is greater than one
  if(str1.length-str2.length > 1 || str2.length - str1.length > 1) return false;
  //generate character maps
  const charM1 = map(str1);
  const charM2 = map(str2);
  let count = 0;
  //check if key count is 2 or less
  //we need to use the str with greater length
  if(str2.length > str1.length)
  {
    for(let char in str2) 
    {
      if(str2[char] !== str1[char]) count++;
    }
    //if count =2 then multple edits need to done
    //set a new counter
    let secCount = 0;
    if(count===2)
    {
      for(let i=0; i<str2.length; i++)
        if(str2[i] !== str1[i]) secCount++;
      if(secCount >= 2) return false;
    }
    if(count>2) return false;
  }

  if(str1.length > str2.length)
  {
    for(let char in str1) 
    {
      if(str1[char] !== str2[char]) count++;
    }
    //if count =2 then multple edits need to done
    //set a new counter
    let secCount = 0;
    if(count===2)
    {
      for(let i=0; i<str1.length; i++)
        if(str1[i] !== str2[i]) secCount++;
      if(secCount >= 2) return false;
    }
    if(count>2) return false;
  }

  return true;
}

console.log(OneAway("bale","kmop"));