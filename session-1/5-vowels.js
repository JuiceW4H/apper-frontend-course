function convertToVowels(word) {
    
    // Declare variables to be used
    const vowels = "aeiou"
    let vowelOnly = ""

    // Checks if word is a string
    if(typeof(word) !== "string"){
        return "Not a string."
    }

    // Bruteforce method using 2 pointers to compare the word[index] to the vowels[index]
    for (let ptr1 in word){
        for (let ptr2 in vowels){
            if (word[ptr1] === vowels[ptr2]){
                vowelOnly += word[ptr1]
            }
        }
    }

    return vowelOnly
}

const word = 'this is some word'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo