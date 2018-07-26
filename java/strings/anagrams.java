// check if two strings(str1,str2) are anagrams
/*
1. check if lengths ar equal
2. sort the strings
*/
class anagrams {
  String stripChar(String strA)
  {
    return (strA.replaceAll("[0-9]", "").toLowerCase());
  }
  public static void main(String[] args) {
    anagrams obj1 = new anagrams();
    System.out.println(obj1.stripChar(" fAi5ry_%tales "));
  }
}