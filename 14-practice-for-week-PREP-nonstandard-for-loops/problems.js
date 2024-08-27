function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let odds = [];

    for (let i = 1; i < arr.length; i += 2) {
        odds.push(arr[i]);
    }

    return odds;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddsReverse = [];

    for (let i = 1; i < arr.length; i += 2) {
        oddsReverse.unshift(arr[i]);
    }

    return oddsReverse;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let powersOfTwo = [];

    for (let i = 1; i < arr.length; i *= 2) {
        powersOfTwo.push(i);
    }

    let newArr = [];

    for (let i = 0; i < powersOfTwo.length; i++) {
        newArr.push(arr[powersOfTwo[i]]);
    }

    return newArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let powers = [];

    for (let i = 1; i < arr.length; i *= n) {
        powers.push(i);
    }

    let newArr = [];

    for (let i = 0; i < powers.length; i++) {
        newArr.push(arr[powers[i]]);
    }

    return newArr;

}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let newArr = [];
    for (let i = 0; i < Math.ceil(arr.length / 2); i++ ) {
        newArr.push(arr[i]);
    }

    return newArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here

    let newArr = [];

    for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}


module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
