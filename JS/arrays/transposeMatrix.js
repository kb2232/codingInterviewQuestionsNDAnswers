//transpose
//Object.keys(matrix) : generates keys for each column
const transpose = (matrix)=>{
  return Object.keys(matrix).map((key)=>{
    //for each key of matrix, print the column
    return matrix.map((m)=>{
      return m[key];
    });
  });
}