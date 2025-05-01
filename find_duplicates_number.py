# How do you find duplicate numbers in an array if it contains multiple duplicates

arr = [1,38,2, 5,85,3,5,2,3,1]

dupt_arr = []
temp_arr = []
for i in arr:
	arr.remove(i)
	if i in arr:
		temp_arr.append(i)
		dupt_arr.append(i)


print(f'all duplicates value  {dupt_arr}')