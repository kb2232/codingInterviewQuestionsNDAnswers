//transpose the matrix
//reverse the rows

const transpose = matrix => {
	return Object.keys(matrix).map(keys => {
		return matrix.map(m => {
			return m[keys];
		});
	});
};

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