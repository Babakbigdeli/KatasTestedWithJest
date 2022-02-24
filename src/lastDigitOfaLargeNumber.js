// Last digit of a large number ......

// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b
// Note that a and b may be very large!
// For example, the last decimal digit of 9^7 is 9, since 9^7=4782969 
// Also, please take 0^0 to be 1.
// You may assume that the input will always be valid.

// the trick here would be to find a hack to do it otherwise, if its done in the conventional way, you
// get runtime errors everytime str1 and str2 are very large numbers. check https://brilliant.org/wiki/finding-the-last-digit-of-a-power/#:~:text=Finding%20the%20last%20digit%20of%20a%20positive%20integer%20is%20the,division%20by%20n%20n%20n
// or https://www.youtube.com/watch?v=cQm__9qnXIw which is the one I used below.

function lastDigit(str1, str2){ 
    if(str2!== "0"){
    var baseLastChar = parseInt(str1.charAt(str1.length - 1))
    function simplifiedPower(i){
    var str2Numbered = parseInt(i) % 4
    return (str2Numbered ? str2Numbered%10 : 4)
    }
    return Math.pow(baseLastChar, simplifiedPower(str2.slice(-2))) % 10 
    }
  else{ return 1 }
    }

module.exports = lastDigit;