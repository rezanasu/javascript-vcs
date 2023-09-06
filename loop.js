// Looping atau Perulangan

let number = 5;


// Looping 

//  *    i = 0
//  **   i = 1
//  ***  i = 2
//  **** i = 3
//  ***** i = 4
//j 01234

// 1

for(let i = 0; i < number; i++) {

    // nested loop
    let stars = ""
    for(let j = 0; j <= i; j++) {
        stars += "*"
    }

    console.log(stars);
}

// Loop inverted stars
// ***** i = 
// ****
// ***
// **
// *

// break line
console.log("==============================")
console.log("==============================")

// 2
for(let i = 5; i >= 0; i--) {

    let stars = ""
    for(let j = 0; j < i; j++) {
        stars += "*"
    }

    console.log(stars)
} 

// break line
console.log("==============================")
console.log("==============================")


// 3
//  ***** i = 0
//  *   * i = 1
//  *   * i = 2
//  *   * i = 3
//  ***** i = 4
//J 01234

// number = 5

for(let i = 0; i < number; i++) {

    let stars = ""
    for(let j = 0; j < number; j++) {
        
        if(i === 0 || i === number - 1 || j === 0 || j === number - 1) {
            stars += "*"
        } else {
            stars += " "
        }
    }

    console.log(stars)
}

// WHILE LOOP

// while(boolean conditions)

console.log("==============================")
console.log("==============================")

let firstNumber = 0;

while(firstNumber < 10) {
    console.log(++firstNumber)
}





