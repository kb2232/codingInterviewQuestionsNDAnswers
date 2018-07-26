class Queue 
{
  //we need something to hold the data - storing data
    constructor()
    {
      this.storeData = [];
    }

    //add method
    //must add to the front of the array
    add(record)
    {
      this.storeData.unshift(record);
    }
    //remove method - removes from end of queue
    remove()
    {
      this.storeData.pop();
    }
    //peek - returns last element inside data array
    peek(){
      return this.storeData[this.storeData.length-1];
    }

}