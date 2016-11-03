// Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop,
// add a string to the array. But not just any string. If your i value is 1, add the string "I am 1 strange loop.";
// but if your i value is anything else, add the string "I am ${i} strange loops." to the array 25 times.
// (Remember flow control with if and else? And how do we interpolate i?) Then return the array.

// EXAMPLE: array = ["dog", "cat", "mouse"]

function forLoop(array) {
    for (var i = 0; i < 25; i++) {
        if (i === 1) {
            array.push("I am 1 strange loop.")
        } else {
            array.push("I am ${i} strange loops.")
        }
    }
    return array
}

function whileLoop(n) {
    while (n > 0) {
        console.log(n--)
    }
    return "done"
}

function maybeTrue() {
    return Math.random() >= 0.5
}

function doWhileLoop(array) {
    do {
        array.pop()
    } while (array.length > 0 && maybeTrue());
return array
}
