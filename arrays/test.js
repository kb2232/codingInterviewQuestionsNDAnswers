const leftsteps = (n)=>{
  let row, col;
  for(row=0; row<n; row++)
  {
    let level = "";
    for(col=0; col<n; col++)
    {
      (row>=col)?level+="#":level+=" ";
    }
    console.log(level);
  }
}

leftsteps(3);