// function fib(num)
// {
//   var results = [0,1];
//   for(let i = 2; i<num; ++i)
//   {
//     let a = results[i-1];
//     let b = results[i-2];
//     results.push(a+b);
//   }
//   return results;
  
// }

// console.log(fib(5));

function memoize(fn)
{
  const cache = {};
  //the point is store values that are repeating 
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }
  }
}


//using recursion
function slowfib(n)
{
  if(n<2) return n;
  return fib(n-1)+fib(n-2);
}

console.log(fib(10));