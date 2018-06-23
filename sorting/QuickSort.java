class QuickSort {
  //swap function
  void swap(int arr[], int i, int j)
  {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  //arr[] = {10,80,30,90,70}
  //low is usually the first element in array
  //high is usually the last element in array
  int partition(int arr[], int low, int high)
  {
    //we need an index to keep track of last element
    int smallest = low-1;//-1
    //choses last element as pivot
    int pivot = arr[high];//70
    //loop through array
    for(int j=low; j<high; ++j)
    {
      //j=0,1,2,3,4
      if(arr[j]<=pivot)
      {
        smallest++;//0,1,2
        swap(arr, smallest, j);
        //r0->{10,80,30,90,70}
        //r2->{10,30,80,90,70}
        //r4->{10,30,70,90,80}
      }
    }
    //we need to make sure the pivot is in the center
    //smallest+1 is the pivot 
    swap(arr,smallest+1,high);
    //{10,30,70,80,90}
    return smallest+1;
  }

  //sort function
  void sort(int arr[],int low, int high)
  {
    if(low<high)
    {
      //pi is partition index
      int pi = partition(arr,low,high);
      sort(arr,low, pi-1);
    sort(arr, pi+1, high);
    }
  }
static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i]+" ");
        System.out.println();
    }
 
    // Driver program
public static void main(String args[])
{
        int arr[] = {10,80,30,90,70};
        int n = arr.length;
 
        QuickSort obj = new QuickSort();
        obj.sort(arr, 0, n-1);
 
        System.out.println("sorted array");
        printArray(arr);
}

}
