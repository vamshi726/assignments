/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowelsArr = ['a','e','i','o','u']
    let count =0
    let lowerStr = str.toLowerCase()
    for(let letter of lowerStr){
      if(vowelsArr.includes(letter)){
        count++
      }
    }



    return count
} 

module.exports = countVowels;