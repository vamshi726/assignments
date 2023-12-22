/*

  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

*/

function isAnagram(str1, str2) {
  //finding length of both strings
  if(str1.length !== str2.length){
    return false
  } 

  //removing spaces and making all to lowercases
  str1 = str1.replace(/\s/g,'').toLowerCase()
  str2 = str2.replace(/\s/g,'').toLowerCase()

  //splitting strings into individual characters, sorting it, and joining it
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')

  //if both strings are same after sort it return true
  if (str1 === str2){
    return true
  }
  //all other cases return false
  return false
  }


module.exports = isAnagram;
