// const step = (n)=>{
//   for(let i=1; i<=n; ++i)
//   {
//     console.log('#'.repeat(i));
//   }
// }

// step(5);
//n=3
/*
#
##
###
1. loop through each row
2.  define the level
3. loop through each col
4.  notice that # only exist if row-col or col-row >=0
*/

// const steps = (n)=>{
//   for(let row=0; row<n; row++)
//   {
//     var level = '';
//     for(let col=0; col<n; col++)
//     {
//       if(row-col>=0)
//         level +='#';
//       else level +='';
//     }
//     console.log(level);
//   }
// }
// steps(5);

const steps2 = n => {
  let r=n,c=n;
  for(let i=0; i<n; i++)
  {
    let level = '';
    for(let j=0; j<c; j++)
      (i>=j)?level+='#':level+=' ';
    console.log(level);
  }
}
steps2(5);