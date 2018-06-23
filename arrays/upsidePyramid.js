//n=3
/*
# # # # #
  # # #
    # 
00 01 02 03 04
10 11 12 13 14
20 21 22 23 24
30 31 32 33 34
*/
///done!!!
const pyramid = (n)=>{
  const mid = Math.floor((2*n-1)/2);
  for(let row=0; row<n; row++)
  {
    var level = '';
    for(let col=0; col<2*n-1; col++)
    {
      if(col >= row && col+row <= 2*n-2)
        level += '#';
      else level += ' ';
    }
    console.log(level)
  }
}
pyramid(4);