function reverse(word) {
    
    // Declare variables
    let reversedWord = ''
    let wordLength = word.length - 1

    //For loop that starts at the last index of the string going down and concatinates to the reversedWord variable.
    for(let index = wordLength ; index >= 0 ; index--){
        reversedWord += word[index]
        }

    return reversedWord
}

const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'