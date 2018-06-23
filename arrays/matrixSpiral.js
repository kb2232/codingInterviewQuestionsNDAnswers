((n)=>{
  const results = [];
  for(let i=0; i<n; i++)
  {
    results.push([]);
  }
  var counter=1;
  var startcol=0,endcol=n-1,startrow=0,endrow=n-1;
  while(startcol<=endcol && startrow <= endrow)
  {
    //top row
    for(let i = startcol; i<=endcol; i++)
    {
      results[startrow][i] = counter;
      counter ++;
    }
    startrow++;
    //right column
    for(let i = startrow; i<=endrow; i++)
    {
      results[i][endcol] = counter;
      counter++;
    }
    endcol--;
    //last row
    for(let i = endcol; i>=startcol; i--)
    {
      results[endrow][i]=counter;
      counter++;
    }
    endrow--;
    //start col
    for(let i = endrow; i>=startrow; i--)
    {
      results[i][startcol] = counter;
      counter++;
    }
    startcol++;
  }
  console.log(results);

})(3)