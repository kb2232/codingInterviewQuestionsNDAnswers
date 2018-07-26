//"aabcccccaaa"=>"a2b1c5a3";
//"abcd"=>"abcd"
// const strComp = (str)=>{
//   var count = 1, totCount=0;
//   var arr = [];
//   for(var x=0; x<str.length; x++)
//   {
//     if(str[x]===str[x+1]) count++;
//     else {
//       arr.push(str[x]);
//       if(count===1){ 
//         totCount++;
//         arr.push(count);
//       } else {
//         arr.push(count);
//         count = 1;
//       }
//     }
//   }
//   if(totCount===str.length) return str;
//   else return arr.join('');
// }
// console.log(strComp("aabcccccaaa"));
// console.log(strComp("abcd"));
// console.log(strComp("aabccccc"));

function stringCompression (str) {
  if (str.length ==0) {
    console.log('Please enter valid string.');
    return;
  }
  var output = '';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i+1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  console.log(output);
}
stringCompression("aabcccccaaa");
stringCompression("abcd");