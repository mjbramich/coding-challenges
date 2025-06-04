# Description: 
# Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
# You need to cast the whole array to the correct type.
# Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

# ie:["1", "2", "3"] to [1, 2, 3]
# Note that you can receive floats as well.


# My solution:
def to_float_array(arr): 

    numbers = []
    for n in arr:
        numbers.append(string_to_number(n))
        
    return numbers
    
    
def string_to_number(num):
    if num.isdigit():
        return int(num)
    
    return float(num)