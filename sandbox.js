const arraySize = 100;
let randomNumbers = [];

for(let i = 0; i < arraySize; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}

console.log(randomNumbers);

let oddArray = [];
let evenArray = [];

for(let i = 0; i < randomNumbers.length; i++) {

    // Split array berdasarkan index
    if(i % 2 === 0) {
        evenArray.push(randomNumbers[i])
    } 
    else {
        oddArray.push(randomNumbers[i])
    }
}

// =================> paramater
function findMinimum(inputArray) {
    let result = inputArray[0];
    
    for(let i = 0; i < inputArray.length; i++) {
        if(result > inputArray[i]) {
            result = inputArray[i]
        } 
    }
    return result
}

function findMaximum(inputArray) {
    let result = inputArray[0];
    
    for(let i = 0; i < inputArray.length; i++) {
        if(result < inputArray[i]) {
            result = inputArray[i]
        } 
    }
    return result
}

function findTotal(inputArray) {
    let result = 0;

    for(let i = 0; i < inputArray.length; i++) {
        result += inputArray[i]
    }
    return result;
}

function findAverage(inputArray) {
    return findTotal(inputArray) / inputArray.length;
}

function findAll(inputArray) {

    let result = {}
    let min = inputArray[0];
    let max = inputArray[0];
    let total = 0;
    let avg = 0;

    for(let i = 0; i < inputArray.length; i++) {
        if(min > inputArray[i]) {
            min = inputArray[i]
        } else if(max < inputArray[i]) {
            max = inputArray[i]
        }

        total += inputArray[i]
    }

    avg = total / inputArray.length;

    result = {
        minimum: min,
        maximum: max,
        total: total,
        avg: avg
    }

    return result;
}

function arrayComparison(oddArray, evenArray) {
    // LOCAL SCOPE
    if(findMinimum(oddArray) > findMinimum(evenArray)) {
        console.log("Minimum of odd array larger than minimum of even array")
    } else if(findMinimum(oddArray) < findMinimum(evenArray)) {
        console.log("Minimum of odd array smaller than minimum of even array")
    } else {
        console.log("Arrays have same minimum value")
    }

    if(findMaximum(oddArray) > findMaximum(evenArray)) {
        console.log("Maximum of odd array larger than Maximum of even array")
    } else if(findMaximum(oddArray) < findMaximum(evenArray)) {
        console.log("Maximum of odd array smaller than Maximum of even array")
    } else {
        console.log("Arrays have same Maximum value")
    }

    if(findTotal(oddArray) > findTotal(evenArray)) {
        console.log("Total of odd array larger than Total of even array")
    } else if(findTotal(oddArray) < findTotal(evenArray)) {
        console.log("Total of odd array smaller than Total of even array")
    } else {
        console.log("Arrays have same Total value")
    }

    if(findAverage(oddArray) > findAverage(evenArray)) {
        console.log("Average of odd array larger than Average of even array")
    } else if(findAverage(oddArray) < findAverage(evenArray)) {
        console.log("Average of odd array smaller than Average of even array")
    } else {
        console.log("Arrays have same Average value")
    }
}

function printResult() {
    
    console.log(`Minimum of even Array: ${findMinimum(evenArray)}`)
    console.log(`Minimum of odd Array: ${findMinimum(oddArray)}`)
    console.log(`Maximum of even Array: ${findMaximum(evenArray)}`)
    console.log(`Maximum of odd Array: ${findMaximum(oddArray)}`)
    console.log(`Total of even Array: ${findTotal(evenArray)}`)
    console.log(`Total of odd Array: ${findTotal(oddArray)}`)
    console.log(`Total of even Array: ${findTotal(evenArray)}`)
    console.log(`Average of odd Array: ${findAverage(oddArray)}`)
    console.log(`Average of even Array: ${findAverage(evenArray)}`)
    console.log("=================================")
    arrayComparison(oddArray, evenArray);
}

printResult();

