// The two sum problem
// 1. given array [2,7, 5, 1], and target=9
// 2. return the indices of any two elements that add to the target;
// 3. assume that each input will have exactly ONE sulution. You may not use same element twice

// An O(n^2) solution will be to go through the loop twice
// and compare each elements - return both indices once you find the target
const twosum = ((arr, target) => {
  result = [];
  for(let x1=0;  x1<arr.length; x1++)
  {
    for(let x2=1; x2<arr.length; x2++)
    {
      if(arr[x1]+arr[x2]===target){
        result.push(x1);
        result.push(x2);
        console.log(result);
        return;
      }
    }
  }
})([1,2,3],5);