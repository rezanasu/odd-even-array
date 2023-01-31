

// console.log((10 + 5 - 20 + 20 * 5) / 2)
// console.log((20 + 20 - 14 + 29 * 10) / 2)
// console.log((40 + 10 - 16 + 21 * 15) / 3)
// console.log("===========================================")

// // (10 + 5 - 20 + 20 * 5) / 2

// // ===================> PARAMETERS
// function calcNumbers(number1, number2, number3, number4, number5, number6) {
//     return (number1 + number2 - number3 + number4 * number5) / number6
// }

// /// ======> ARGUMENTS
// console.log(calcNumbers(10, 5, 20, 20, 5, 2))
// console.log(calcNumbers(20, 20, 14, 29, 10, 2))
// console.log(calcNumbers(40, 10, 16, 21, 15, 3))

let randomNumbers = [];

for(let i = 0; i < 50; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1)
}
// console.log(randomNumbers)

function findMinMax(inputArray) {
    let min = inputArray[0];
    let max = inputArray[0]

    for(let i = 0; i < inputArray.length; i++) {
        if(min > inputArray[i]) {
            min = inputArray[i]
        } else if(max < inputArray[i]) {
            max = inputArray[i]
        }
    }

    return {
        min,
        max
    };
}


function calcDamage() {
    // Damage random 1 - 70
    
    // return damage calculation
} 

function statusChar(healthBar) {

    // healthBar <= 100 AND healtBar >= 70 =====> NORMAL
    // healthBar >= 50 AND healthBar < 70 ====> WOUNDED
    // healthBar > 1 AND healthBar < 50 ====> DYING
    // healthBar === 0 ====> DEAD
}

while(healthBar >= 0) {

    // check statusChar
    // calculate Damage and reduce healthbar
}




