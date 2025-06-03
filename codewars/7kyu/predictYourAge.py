# My Solution:

import math

def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8):
    
    ages = [age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8]
    
    # Multiply each number by itslef
    result = list(map(lambda age: age * age, ages))

    # Add them all together
    total = 0
    for age in result:
        total += age
        
    # Square root the total
    return math.floor((total ** 0.5) / 2)