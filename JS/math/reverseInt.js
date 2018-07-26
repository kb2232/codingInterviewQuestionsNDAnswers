//reverseInt(51) === 15
//reverseInt(-15) === -51
//reverseInt(500) === 5
//reverseInt(-90) === -9

const revInt = (n => {
  if(n<0)
  {
    console.log(-1*parseInt((((-1*n).toString().split('')).reverse()).join('')));
  } else console.log(parseInt(((n.toString().split('')).reverse()).join('')));
})(-90);
