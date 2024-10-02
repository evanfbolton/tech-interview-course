/* Psuedo Code */

// 1. declare a function called reverseArray
// 2. declare an empty array for the reversed array
// 3. assign the length of the array to a variable
// 4. use a for loop that starts at the length and iterates backwards
// 5. push each number to the previously declared array
// 6. return the new, reversed array


/* Easy Solution */

function reverseArrayEasy(a) {
    return a.reverse()
}

/* Hard Solution */

function reverseArrayHard(a) {
    let length = a.length
    let reversedA = []

    for (let i = length - 1; i >= 0; i--) {
        reversedA.push(a[i])
    }

    return reversedA
}


/* Test Cases */
console.log('Hard Tests')
console.log(reverseArrayHard([1,2,3]))
console.log(reverseArrayHard([1,2,3,4,5,6,7,8,9,10]))
console.log(reverseArrayHard([5,4,3,2,1]))

console.log('Easy Tests')
console.log(reverseArrayEasy([1,2,3]))
console.log(reverseArrayEasy([1,2,3,4,5,6,7,8,9,10]))
console.log(reverseArrayEasy([5,4,3,2,1]))