// sentence cap
/**
 * 1. break the sentence into an array
 * 2. for each word in the array, cap the first letter
 */

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