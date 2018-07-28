myTup  = (3,'t',9,"kunle",(1,9,8));

#access first element -> going forward
print myTup[0]
#access last element -> going forward
print myTup[4]
#check type
print type(myTup)
#access first element -> going backward
print myTup[-1]
#access last element -> going backwards
print myTup[-5]

mytup2 = ('5','l','g','o','y','h','l');
print mytup2[1:4]; #prints (l g o)
print mytup2[:-2]; #prints ('5','l','g','o','y')
print mytup2[1:];#('l','g','o','y','h','l')
print mytup2[:1]; #('5');
print mytup2[:2]; #('5','l');