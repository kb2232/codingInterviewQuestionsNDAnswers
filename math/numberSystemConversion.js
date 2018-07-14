/*
1. decimal numbers are just basic numbers 0-9:
  - 0, 1, 2, 3, 4, 5, ...
  - the are base of 10

2. Binary numbers are zeroes and ones.
  - 0, 1
  - base of 2

3. Octal numbers use 0..7 numbers
  - base of 7

4. Hexadecimal numbers uses 0-9 AND A..F
  - base 16

*/

const binary2decimal = n => {
  let rem = [];
  while(true)
  {
    rem.unshift(n%2);
    n = Math.floor(n / 2);
    if(n<2) {
      rem.unshift(1);
      break;
    }
  }
  console.log(rem);
}
binary2decimal(156);
binary2decimal(32);
binary2decimal(31);
binary2decimal(17);