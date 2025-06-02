# Description: Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. 
# As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, 
# so your function needs to work with both dates in the future and in the past.

# My Solution
def calculate_age(year_of_birth, current_year):
    
    calcAge = year_of_birth - current_year
    
    if(calcAge == 0):
        return 'You were born this very year!'
    elif(calcAge == 1):
        return 'You will be born in 1 year.'
    elif(calcAge == -1):
        return 'You are 1 year old.'
    elif(calcAge < 0):
        return f'You are {abs(calcAge)} years old.'
    else:
        return f'You will be born in {abs(calcAge)} years.'