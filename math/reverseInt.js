//reverseInt(51) === 15
//reverseInt(-15) === -51
//reverseInt(500) === 5
//reverseInt(-90) === -9

((num)=>{
  //check if positive or negative
  if(Math.sign(num)===1)
  {
    //turn num to string
    console.log(parseInt(num.toString().split('').reverse().join('')));
  } else {
    console.log(-1*parseInt(num.toString().split('').reverse().join('')));
  }
})(-500)