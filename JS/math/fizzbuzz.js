((num)=>{
  for(var i=1; i<=num; ++i)
  {
    if(i%3===0 && i%5===0){
      console.log("fizzbuzz");
      ++i;
    }
    if(i%3===0){
      console.log("fizz");
      ++i;
    }
    if(i%5===0){
      console.log("buzz");
      ++i;
    }
    if(i>num) break;
    else console.log(i);
  }
})(45)