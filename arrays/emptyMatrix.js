function emptyMatrix(M,N)
{
  var matrix = [];
  for(row=0; row<M; row++)
  {
    matrix[row]=[];
    for(col=0; col<N; col++)
      matrix[row][col] = undefined;
  }
  return matrix;
}