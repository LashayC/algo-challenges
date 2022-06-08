/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // Code goes here

    let vowelCount = 0
    let textArray = text.toLowerCase().split('')

    let vowels = ['a', 'e', 'i', 'o', 'u']

    // vowels.forEach(function(vowel) {
    //     inputLetters.forEach(function(inpLetter) {
    //       if (inpLetter === vowel) {
    //         vowelsCount++;
    //       }
    //     });
    //   });
        
    return textArray.filter(letters => letters === 'a'  || letters === 'i' || letters === 'e' || letters === 'o' || letters === 'u').length

      // return vowelsCount;
}



module.exports = vowelsCounter;
