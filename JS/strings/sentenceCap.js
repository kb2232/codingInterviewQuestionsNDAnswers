//given a sentence, capitalize the first letter in each word
//("a man is short") -> ("A Man Is Short")

//1. loop through the string
//2. split(' ') the strings into arrays
//3. in each element of the array, use toUpperCase for the first character

// ((str)=>{
//   const arr = str.split(' ');
//   const word = [];
//   for(let chunk of arr)
//   {
//     word.push(chunk[0].toUpperCase() + chunk.slice(1));
//   }
//   console.log(word.join(' '));
// })("a man is short")


//using a constructor
const Cap = function(sentence) {
  this.sentence = sentence;
  this.arr = sentence.split(' ');
  this.newSen = [];
  this.setCap = function()
  {
    for(let word of this.arr)
    {
      this.newSen.push(word[0].toUpperCase()+word.slice(1));
    }
    return this.newSen.join(' ');
  }
}

const sen1 = new Cap("a man is short");
console.log(sen1.setCap());