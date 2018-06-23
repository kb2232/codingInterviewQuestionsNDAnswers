//n=3
/*
    #     
  # # #
# # # # #
1. define the midpoint
2. loop through each row
2b. define each level = ' ';
3.  loop through each col
4.    add # if((mid-row)<=col && (mid+row)>=col) else add ' ';
*/
///done!!!
const pyramid = (n)=>{
  const mid = Math.floor((2*n-1)/2);
  for(let row=0; row<n; row++)
  {
    var level = '';
    for(let col=0; col<2*n-1; col++)
    {
      if((mid-row)<=col && (mid+row)>=col)
        level += '#';
      else level += ' ';
    }
    console.log(level)
  }
}
pyramid(6);