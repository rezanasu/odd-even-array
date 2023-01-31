const randomNumbers = [];
const randomNumbers2 = [];
console.log(randomNumbers, "BEFORE")

// Math.random() =====> 0 - 0.9999999
// Math.floor(angka) ===> buletin ke bawah
// Math.ceil(angka) ===> buletin ke atas
for(let i = 0; i < 100; i++) {
    // 1 - 50
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
    randomNumbers2.push(Math.floor(Math.random() * 50) + 1);
}
console.log(randomNumbers, "AFTER")

//[6, 41, 16, 35, 46, 17, 46, 19, 49, 30, 35]
// |   |   |   |   |  |    |   |   |   |   |
// 0   1   2   3   4  5    6   7   8   9   10


function findMinimum(inputedArray) {
    let min = inputedArray[0];

    for(let i = 0; i < inputedArray.length; i++) {
        if(min > inputedArray[i]) {
            min = inputedArray[i]
        }
    }

    return min
}

function findMaximum(inputedArray) {
    let max = inputedArray[0];

    for(let i = 0; i < inputedArray.length; i++) {
        if(max < inputedArray[i]) {
            max = inputedArray[i]
        }
    }

    return max
}

function findTotal(inputedArray) {
    let total = 0;

    for(let i = 0; i < inputedArray.length; i++) {
        total += inputedArray[i]
    }

    return total;
}

// AVERAGE = TOTAL / ARRAY LENGTH

function findAvg(inputedArray) {
    return findTotal(inputedArray) / inputedArray.length;
}



console.log(findMinimum(randomNumbers))
console.log(findMinimum(randomNumbers2))
console.log(findMaximum(randomNumbers))
console.log(findMaximum(randomNumbers2))
console.log(findTotal(randomNumbers))
console.log(findTotal(randomNumbers2))
console.log(findAvg(randomNumbers))
console.log(findAvg(randomNumbers2))






