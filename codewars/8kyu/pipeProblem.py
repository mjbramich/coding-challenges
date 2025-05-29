# Description:
# Given a list of unique numbers sorted in ascending order, 
# Return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
# Example Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

# My solution: 
def pipe_fix(nums):
    min = nums[0]
    max = nums[-1]
    fullNums = []
    
    for num in range(min, max + 1):
        fullNums.append(num)
        
    return fullNums