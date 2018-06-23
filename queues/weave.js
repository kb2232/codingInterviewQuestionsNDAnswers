import Queue from './qweave';

const weave = (sourceOne, sourceTwo)=>{
  //third queue to store sourceOne and sourceTwo
  const q = new Queue();

  //a loop to stop whenever one of the queue is emepty
  while(sourceOne.peek()||sourceTwo.peek())
  {
    //if queue one is not empty then add
    if(sourceOne.peek())
      q.add(sourceOne.remove());
    //if queue two is not empty then add
    if(sourceTwo.peek())
      q.add(sourceTwo.remove());
  }
  return q;
}