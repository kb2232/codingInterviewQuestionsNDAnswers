* Trees Overview 
  # node class
  1. a node carries data, and references to ALL the child nodes underneath it.
  2. create a node class. The constructor should accept data property; moreover, initialize empty array which will store all the children.
  3. methods are add and remove
  # tree class
  1. create a tree class - initialize the root to null;
  2. create traverseDFS, traverseBFS

                                          20
                                       0  40  15
                                      _|_     |
                                     | | |    |
                                    -3 5 3    -2
                          
* tree traversal means ordering nodes and iterate through them
  1. breadth first traversal: we traverse through levels: from left to right
     * The above tree has three levels: so traversing thru will give: 20; 0, 40, 15; -3, 5, 3, -2
  2. depth first traversal: the goal is to get to the bottom left side of the tree as fast as possible
     * the above tree: 20->0->(-3)->go back to 0 but it has been read -> 5 - >go back to 0 but it has been read ->3 -> go back to 0 but it has been read - >go back to 20 but it has been read -> 40 ->go back to 20 but it has been read -> go back to 20 but it has been read -> 15 -> -2;S