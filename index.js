// Function
// Code yang dibuat, bisa dipakai berulang kali

// ES5 VERSION

// function myFunction() {

// }

// ES6 Version or Arrow Function

// const arrowFunction = () => {

// }

const simpleCalc = (firstNumber, secondNumber, operator) => {

    let result = 0;

    if(operator === "+") {
        // Pertambahan
        result = firstNumber + secondNumber
    } else if(operator === "-") {
        // Pengurangan
        result = firstNumber - secondNumber
    } else if(operator === "*") {
        // Perkalian
         result = firstNumber * secondNumber
    } else if(operator === "/") {
        // Pembagian
         result = firstNumber / secondNumber
    } else {
        // Undefined
        result = undefined
    }

    return result;
}

// console.log(simpleCalc(10, 20, "+"))
// console.log(simpleCalc(30, 6, "/"));


// ARRAY
// DATA STRUCTURE yang bisa menyimpan banyak value


// Array Javascript

//   -----
let numbers = [5, 10, 27, 30, 50, 21];
//index -->    0,  1, 2,  3,  4,  5 

// for(let i = 0; i < numbers.length; i++) {

//     console.log(numbers[i])
// }

// array.slice(startPosition, endPosition)
// endPosition => valuenya tidak termasuk didalam array

// Percabangan

let lampColor = "purple"

// Kondisinya banyak
switch(lampColor) {
    case "red":
        console.log("STOP")
        break;
    case "yellow":
        console.log("PREPARE")
        break;
    case "green":
        console.log("GO")
        break;
    default:
        console.log("INVALID COLOR")
}



