import STACK from './stack';
import QUEUE from './queue';
s1 = new STACK();
s2 = new STACK();
q = new QUEUE();

const twostack = (s1,s2)=>{
  //add a,b,c to stack one
  s1.add('A'); s1.add('B'); s1.add('C'); 
  while(!s1.empty())
  {
    s2.add(s1.remove());
  }
  while(!s2.empty())
  {
    q.add(s2.remove());
  }
  q.print();
}