/* Psuedo Code */

// 1. create function called birthdayCakeCandles
// 2. create a variable to hold the number of candles that can be blown out
// 3. use Math.max to find the largest number in the array and assign it to a variable
// 4. use a for-of loop to determine how many times that number occurs in the array
// 5. end function by returning the number of candles from the function


/* Solution */

function birthdayCakeCandles(candles) {
    let numOfCandles = 0
    let maxCandleHeight = Math.max(...candles)

    for (let candle of candles) {
        if (maxCandleHeight === candle) numOfCandles++
    }

    return numOfCandles
}


/* Test Cases */

console.log(birthdayCakeCandles([3,2,1,3])) // return 2
console.log(birthdayCakeCandles([4,4,5,3,5,6,6,6,2,3])) // return 3
console.log(birthdayCakeCandles([1,1,1,1,1])) // return 5
console.log(birthdayCakeCandles([2,6,100,5,7,8,9,10,11,12,13,25])) // return 1