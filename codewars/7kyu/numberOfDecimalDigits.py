# Description: 
# Determine the total number of digits in the integer (n>=0) given as input to the function. 
# For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
# All inputs will be valid.

# My solution
def digits(n):
    # Need to determine how many digits is in th integer (n)
    # N is a integer, so no messing with decimals. 
    return len(str(n))
