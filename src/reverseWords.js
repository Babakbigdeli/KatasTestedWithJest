// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

function reverseWords(str) {
    let toArray = str.split(" ").map(e=>e.split("").reverse().join(""))
    let toString = toArray.join(" ")
    return toString
    };


module.exports = reverseWords;