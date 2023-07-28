//Exercise: 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//--------------------------------------------------------------------------------------------------------------

let car: string = 'subaru';
let age: number = 20;
let sportCar: boolean = true;
// Test 1
console.log("\nIs car === 'subaru'? I predict True.\n");
console.log(car === 'subaru');

// Test 2
console.log("\nIs 'subaru' age greater than or equal to 20? I predict True\n");
console.log(age >= 20);

// Test 3
console.log("\nIs 'subaru' sportCar? I predict True.\n");
console.log(sportCar === true);

// Test 4
console.log("\nIs 'subaru' not equal to toyota? I predict True\n");
console.log(car !== 'toyota');

// Test 5
console.log("\nIs 'subaru' age less than or equal to 20? I predict True.\n");
console.log(age <= 20);

// Test 6

console.log("\nIs car !== 'subaru'? I predict false.\n");
console.log(car !== 'subaru');

// Test 7
console.log("\nIs 'subaru' age greater than && equal to 20? I predict false\n");
console.log(age > 20 && age === 20);

// Test 8
console.log("\nIs 'subaru' local car? I predict false.\n");
console.log(sportCar !== true);

// Test 9
console.log("\nIs 'subaru' equal to toyota? I predict false\n");
console.log(car === 'toyota');

// Test 10
console.log("\nIs 'subaru' age less than && equal to 20? I predict false.\n");
console.log(age < 20 && age === 20);








