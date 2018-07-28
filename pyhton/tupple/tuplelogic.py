mytup = ('3',3,'t',"tuple",['l','i','s','t']);
print mytup;
print ('3' in mytup);
print ('g' in mytup);
print ('3' not in mytup);

count = 0;
for val in mytup:
  count += 1;
  print (count,':',val);

tup2 = ("world",);
print (tup2*3);

tup3 = tup2;
print type(tup2);
print "tup3 = ",tup3;
tup2 = mytup;
print type(mytup);
print "tup2 = ",tup2;