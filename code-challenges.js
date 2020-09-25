// ASSESSMENT 3: Coding Practical Questions
// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// fibonacci sequence is the addition of laste two numners starting with 0 and 1
// create a function that takes in 10 as argument of length of array
const fibonnaci = (length) => {
    
    let lastValue = 0
    // we're beggining with previous total being 0
    let lastSum = 1
    let currentSum = 0
    //first value of fibonacci is 1
    let fibonacciArray = [1]
    // increment from 0 to argument length
    for (let i = 0 ; i < length-1; i++) {
        //fibonacci is xn = x(n-1) + (n-2)
        // e.g.  x8 = x7 + x6
        // e.g. array[8] = array[7] + array[6]
        // 0 = 1 + 0 to begin first pushed value into array
        currentSum = lastSum + lastValue
        //previousValue is now set to 1 
        lastValue = lastSum
        // previous sum now currentSum
        lastSum = currentSum
        //push this value into the fibonnaciArray
        fibonacciArray.push(currentSum)
    }
    return fibonacciArray
}

console.log(fibonnaci(10));

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// a function that takes in array

const oddSorted = (array) => {
    // create a filter to check for type of numbers
    let numbersOnly = array.filter(value => { 
        return typeof value === "number"
    })
    // check for odds
    let oddsOnly = numbersOnly.filter(value => {
        return value % 2 !== 0
    })
    // sort 
    let sortedOddNums = oddsOnly.sort((a,b) => a-b)
    return sortedOddNums
}

console.log(oddSorted(fullArr1))
console.log(oddSorted(fullArr2))



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "whale"
// Expected output: “a”
var middleLetters2 = "pond"
// Expected output: “on”

// create a function taht takes argument string
const getMiddleLetters = (word) => {
    // need to do an if else to see if word odd or even length
    let middleLetters = ""
    // use Math.floor to round down middle of word length
    let middleIndex = Math.floor(word.length / 2)
    if (word.length % 2 !== 0) {
        // return minus 1 for to change length to index
        return middleLetters = word.charAt(middleIndex)
    } else {
        // if word is even lettered
        // return two middle letters, which is index-1 and index
        return middleLetters = word.charAt(middleIndex - 1) + word.charAt(middleIndex)
    }

}

console.log(getMiddleLetters(middleLetters1));
console.log(getMiddleLetters(middleLetters2));
// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//create class called Sphere
class Sphere {
    //when constructed takes in radius as an argument
    constructor(radius){
        //set this sphere's radius property to radius given in argument
        this.radius = radius
    }
    // create a method that returns the area of sphere
    area() {
        return 4 * (3.14) * (this.radius**2)
    }

}

var sphere1 = new Sphere(5)
console.log(sphere1.area());

var sphere2 = new Sphere(10)
console.log(sphere2.area());

var sphere3 = new Sphere(17)
console.log(sphere3.area());


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// create a function that takes an array 

const arraySum = (arr) => {
    //initalize a previous sum
    let previousSum = 0
    //map through array a
    return arr.map(value => {
        // add current value to Sum and update sum simultaneously
        return previousSum += value
    })
}
console.log(arraySum(numbersToAdd1))
console.log(arraySum(numbersToAdd2))
console.log(arraySum(numbersToAdd3))
