function transform(numbers) {

    // For loop that checks the initial condition of all values as integers.
    for(let index = 0 ; index < numbers.length ; index++){
        if (typeof(numbers[index]) !== "number"){
            return "Not all values of the array are integers."
        }
    }

    // If all values are integers it returns the mutated (sorted and squared) array.
    return numbers
    .sort((a, b) => a - b)
    .map(number => number ** 2)
  }
  
  const numbers = [4,9,5,3,8]
  const sortedSquaredNums = transform(numbers)
  console.log(sortedSquaredNums) // [9,16,25,64,81]