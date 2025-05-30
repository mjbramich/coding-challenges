# Description:
# Find the sum of all multiples of n below m
# Keep in Mind
# n and m are natural numbers (positive integers)
# m is excluded from the multiples
# Examples
# sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
# sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
# sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
# sumMul(4, -7)  ==> "INVALID"

# My solution:
def sum_mul(n, m):

    if(n <= 0 or m <= 0):
        return 'INVALID'

    total = 0

    for num in range(m):
        if(num % n == 0):
            total += num
            
    
    return total