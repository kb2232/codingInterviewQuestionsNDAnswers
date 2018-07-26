const MaxChar = (str)=> {
  let charmap = {};
  let count = 0; let charac;
  //loop through the strings to create key and value;
  for(let char of str)
  {
    //check if empty
    (!charmap[char])?charmap[char]=1:charmap[char]++;
  }
  //loop thru the charmap to return max count
  for(let char in charmap)
  {
    if(charmap[char] >= count) {
      count = charmap[char];
      charac = char;
    }
  }
  return (charac+" appears "+count+" times.");
}

console.log(MaxChar("5hellop6"));