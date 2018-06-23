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
//given NxN matrix
let x = [[0,1,3],[2,-4,9],[5,9,2]];
let m = transpose(x); let N = 3;

let mat = [[]];
for(let i=0; i<N; i++)
{
  mat[[i]] = m[i].reverse()
}
console.log(mat);
