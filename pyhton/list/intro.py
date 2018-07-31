# print the first characters of all elements in the list
nameList = ["kunle","micheal","ronak","sean","kunle"];
print nameList;

for char in nameList:
  print [char[0]];

# write a program to replace each string with an integer
# , where the next integer is a sum of the previous
newList = [];
for char in nameList:
  sum = 0;
  for x in char:
    sum += ord(x);
    newList.append(sum);
print newList;


#print all duplicated valuees in a list
#search the list once in a loop
# search the list in another loop within the first, and if it equals then print

for x in xrange(len(nameList)):
  for y=x+1 in xrange(len(nameList)):
    if nameList[x]==nameList[y]:
      print nameList[x];
