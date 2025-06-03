# Description: 
# Your task is to sum the differences between consecutive pairs in the array in descending order.

# Example
# [2, 1, 10]  -->  9
# In descending order: [10, 2, 1]

# Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

# If the array is empty or the array has only one element the result should be 0


# My solution
def sum_of_differences(arr):
    
    if(len(arr) <= 1):
        return 0
    
    sortedDesc = sorted(arr, reverse=True)
        
    total = 0

    for i, num in enumerate(sortedDesc):
        if i == len(sortedDesc) - 1:
            break
        total += (num - sortedDesc[i + 1])
        

    return total
    
        