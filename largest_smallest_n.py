# How do you find the largest and smallest number in an unsorted integer array

arr = [1,38,2, 5,85,3,5,2,3,1,0]

arrLenght = len(arr)
print(arrLenght, 'lenght arra')

maxNo = arr[0]
smNo = arr[0]
for i in range(1, arrLenght):
	if(arr[i] > maxNo):
		maxNo = arr[i]

print(maxNo)


for i in range(1, arrLenght):
	if(arr[i] < smNo):
		smNo = arr[i]


print(smNo)
