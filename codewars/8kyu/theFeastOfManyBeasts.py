# Description:
# All of the animals are having a feast! Each animal is bringing one dish. 
# There is just one rule: the dish must start and end with the same letters as the animal's name. 
# Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
# Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

# My solution
def feast(beast, dish):
    if(beast[0] == dish[0] and beast[-1] == dish[-1]):
        return True
    
    return False 

# Given 2 inputs both strings

# The dish must start and end with the same letters and the animals name
# Ex. chicken => chocolate naan => true
# Ex. bird => chocholate => false 