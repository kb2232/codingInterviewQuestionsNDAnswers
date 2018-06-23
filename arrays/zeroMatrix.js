const zeroMatrix = (M,N,x)=>{
  var row,col;
  //create the matrix
  var matrix = x;
  //loop tru rows and cols to find the zero element and set it to true
  for(row=0; row<M; row++)
  {
    for(col=0; col<N; col++)
    {
      if(matrix[row][col]===0)
      {
        matrix[row][col] =true;
      }
    }
  }
  //loop tru array - set rows and cols to zero where element is true
  for(row=0; row<M; row++)
  {
    for(col=0; col<N; col++)
    {
      if(matrix[row][col]===true)
      {
        matrix[row][col] =true;
        for(let i=0; i< N; i++)
          matrix[row][i]=0;
        for(let j=0; j<M; j++)
          matrix[j][col]=0;
      }
    }
  }
  return matrix;

}
let x = [[0,1,3],[2,-4,9],[5,9,0]];
console.log(zeroMatrix(3,3,x));