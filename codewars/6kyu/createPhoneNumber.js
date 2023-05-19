/* Description
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*/


// My solution

function createPhoneNumber(numbers){
   let phoneNumber = ''
    
    for( let i = 0; i < numbers.length; i++){
        
        switch(true){
            case i === 0:
                phoneNumber += '('
                phoneNumber += numbers[i]
                break;
            case i === 1:
                phoneNumber += numbers[i]
                break
            case i === 2:
                phoneNumber += numbers[i]
                break;
            case i === 3:
                phoneNumber += ')'
                phoneNumber += ' '
                phoneNumber += numbers[i]
                break
            case i === 4:
                phoneNumber += numbers[i]
                break;
            case i === 5:
                phoneNumber += numbers[i]
                break;
            case i === 6:
                phoneNumber += '-'
                phoneNumber += numbers[i]
                break;
            case i === 7:
                phoneNumber += numbers[i]
                break;
            case i === 8:
                phoneNumber += numbers[i]
                break;
            case i === 9:
                phoneNumber += numbers[i]
                break;
            case i === 10: 
                phoneNumber += numbers[i]
               

        }
    }
    
    return phoneNumber
  }

