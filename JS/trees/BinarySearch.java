class BinarySearch
{
  int recursiveBS(int arr[], int low, int high, int x)
  {
    //low = smallest index; high = highest index; 
    // x = element looking for
    if(high > low)
    {
      int mid = low + (high-low)/2;
      if(x==arr[mid]) return mid;
      if(x < arr[mid])
        return recursiveBS(arr, low,mid-1,x);
      else return recursiveBS(arr, mid+1,high,x);
    }
    return -1;
  }
  public static void main(String args[])
    {
        BinarySearch obj = new BinarySearch();
        int arr[] = {2,3,4,10,40};
        int n = arr.length;
        int x = 1;
        int result = obj.recursiveBS(arr,0,n-1,x);
        if (result == -1)
            System.out.println("Element not present");
        else
            System.out.println("Element found at index " + result);
    }
}