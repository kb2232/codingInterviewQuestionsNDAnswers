//n=3
/*
###
 ##
  #
00 01 02
10 11 12
20 21 22
1. loop through each row
2.  define the level
3. loop through each col
4.  notice that # only exist if row-col or col-row >=0
*/
////done!!!!
const steps = (n)=>{
  for(let row=0; row<n; row++)
  {
    var level = '';
    for(let col=0; col<n; col++)
    {
      if(col-row>=0)
        level +='#';
      else level +=' ';
    }
    console.log(level);
  }
}
steps(5);