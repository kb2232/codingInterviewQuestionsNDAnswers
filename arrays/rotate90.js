//transpose
/*
Rotate by +90:

  Transpose
  Reverse each row

 */
//Object.keys(matrix) : generates keys for each column
const transpose = (matrix)=>{
  return Object.keys(matrix).map((key)=>{
    //for each key of matrix, print the column
    return matrix.map((m)=>{
      //transposed matrix
      return m[key];
    });
  });
}
const reverse = (matrix, N) =>{
  const transMat = transpose(matrix);
  const revMat = [[]];
  for(let x=0; x<N; x++)
  {
    revMat[[x]] = transMat[x];
  }
  return revMat;
}

let x = [[0,1,3],[2,-4,9],[5,9,2]];
let N = 3;
console.log(reverse(x,N));