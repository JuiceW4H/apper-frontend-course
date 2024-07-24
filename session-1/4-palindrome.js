function isPalindrome(word) {
    
    // Declare variables
    let reversedWord = word.split('').reverse().join('')
    
    // // String Type Check
    // if (typeof(word) !== "string"){
    //     return "Enter a string value."
    // }

    // // Palindrome Check
    // if (word === reversedWord){
    //     return true
    // }

    return typeof(word) !== "string" ? "Enter a string value." : word === reversedWord ? true : false;

}

const word = 'racecar'

if (isPalindrome(word)) {
    console.log('It is a palindrome!')
} else {
    console.log('It is not a palindrome!')
}