# My solution: 
def pipe_fix(nums):
    min = nums[0]
    max = nums[-1]
    fullNums = []
    
    for num in range(min, max + 1):
        fullNums.append(num)
        
    return fullNums