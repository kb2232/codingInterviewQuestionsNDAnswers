/*
Rotate by +90:

  Transpose
  Reverse each row

Rotate by -90:

  Method 1 :

  Transpose
  Reverse each column

  Method 2 :

  Reverse each row
  Transpose

Rotate by +180:
  Method 1: Rotate by +90 twice

  Method 2: Reverse each row and then reverse each column (Transpose)

Rotate by -180:

  Method 1: Rotate by -90 twice

  Method 2: Reverse each column and then reverse each row

  Method 3: Rotate by +180 as they are same
*/

//transpose
//Object.keys(matrix) : generates keys for each column
const transpose = (matrix)=>{
  return Object.keys(matrix).map((key)=>{
    //for each key of matrix, print the column
    return matrix.map((m)=>{
      let x = m[key];
      return x;
    });
  });
}

let x = [[0,1,3],[2,-4,9],[5,9,2]];
console.log(transpose(x));