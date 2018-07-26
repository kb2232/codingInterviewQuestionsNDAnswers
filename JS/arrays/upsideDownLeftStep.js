//n=3
/*
###
##
#
00 01 02
10 11 12
20 21 22
*/
////done!!!!
const steps = (n)=>{
  for(let row=0; row<n; row++)
  {
    var level = '';
    for(let col=0; col<n; col++)
    {
      if(col+row < n)
        level +='#';
      else level +=' ';
    }
    console.log(level);
  }
}
steps(5);