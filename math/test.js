const revInt = (n => {
  if(n<0)
  {
    console.log(-1*parseInt((((-1*n).toString().split('')).reverse()).join('')));
  } else console.log(parseInt(((n.toString().split('')).reverse()).join('')));
})(-90);
