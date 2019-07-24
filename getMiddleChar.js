//Exercise 2:
//Given a word, return the middle character or characters of the word.
//If the word is odd in length, return a string of the middle character.
//If the word is even, return a string of the middle two characters.
//If the string is empty, return an empty string.

//Examples:
//"dog" should return "o"
//"Fishing" should return "h"
//"have" should return "av"
//"Middle" should return "dd"
//"C" should return "C"

function getMiddleChar(string)
{
  //create new variable
  var middleLetters = '';

  //find string length if even or odd
  if (string.length % 2 === 0)
    {
    var even = string.length / 2;
    return string.slice(even - 1, even + 1);
  }

  if (string.length % 2 !== 0)
  {
    var odd = string.charAt((string.length / 2))
    return odd;
  }
}

//getMiddleChar("dog");
//getMiddleChar("Fishing");
//getMiddleChar("have");
//getMiddleChar("Middle");
//getMiddleChar("C");
getMiddleChar("Davenport");
//getMiddleChar("");
