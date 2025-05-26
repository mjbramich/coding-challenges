# Desciption:
#Your task is to find the nearest square number of a positive integer n. 
# In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, 

# For example, if n = 111, then the nearest square number equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
# If n is already a perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

# My solution
import math

def nearest_sq(n):
    square_root = math.sqrt(n)
    if square_root.is_integer():
        return n  # Already a perfect square, return itself

    lower = int(square_root)          # Floor of the square root
    upper = lower + 1                 # Next integer above the root

    lower_sq = lower ** 2
    upper_sq = upper ** 2

    # Choose the closer square
    if n - lower_sq <= upper_sq - n:
        return lower_sq
    else:
        return upper_sq