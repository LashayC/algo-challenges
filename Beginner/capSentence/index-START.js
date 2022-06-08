/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

//P: Only strings with spaces. No numbers. No strange symbols.
//R: Should be a string, with the capital letters.
//E: below
//P: 


function capSentence(text) {
   // Code goes here
   //turn into array around spaces. 
   //Loop through string.
  //toUpperCase()
  //join

  let splitStr = text.toLowerCase().split(' ')
  
  let capWords = splitStr.map(word => word[0].toUpperCase() + word.slice(1))
  return capWords.join(' ')
  
}

//'i like cats' //result 'I Like Cats.'
//'The dog is barking!' //'The Dog Is Barking!'
//'The player's are running.' // 'The Player's Are Running.'

module.exports = capSentence