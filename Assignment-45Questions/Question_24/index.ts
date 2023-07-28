//Exercise: 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
//_________________________________________________________________________________________________________________________________________________

// • Tests for equality and inequality with strings
let fruit1 = "apple"
let fruit2 = "MANGO"
console.log(`\nThis is Equality: ${"apple" === "apple"}\n`);
console.log(`\nThis is inequality: ${fruit1 === fruit2}\n`);

// • Tests using the lower case function


console.log("\nThis is lowercase: ",fruit2.toLocaleLowerCase() === 'mango');

console.log(`\nThis is lowercase but false: `, "BANANA".toLocaleLowerCase() === "apple");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to


// equality and inequalit
console.log(`\nThis is equality 5 === 5 is: `, 5 === 5);
console.log(`\n This is inequality 5 !== 5 is :`, 5 !== 5);

// greater than and less than

console.log(`\nThis is greater than 6 > 5: `, 6 > 5);
console.log(`\nThis is greater than 5 > 6: `, 5 > 6);
console.log(`\nThis is less than 6 < 5: `, 6 > 5);
console.log(`\nThis is less than 5 < 5: `, 5 < 5);

// greater than or equal to

console.log(`\nThis is greater than or equal  6 >= 5: `, 6 >= 5);
console.log(`\nThis is greater than or equal 5 >= 6: `, 5 >= 6);

// less than or equal to

console.log(`\nThis is less than or equal 5 <= 6: `, 5 <= 6);
console.log(`\nThis is less than or equal 6 <= 5: `, 6 <= 5);

// • Tests using "and" and "or" operators

console.log("\nThis is && Operator");

console.log(`\n5 > 4 && 4 < 5: `, 5 > 4 && 4 < 5);
console.log(`\n5 > 4 && 4 < 5: `, 5 > 4 && 4 > 5);

console.log("\nThis is Or Operator");

console.log(`\n5 > 4 || 4 < 5: `, 5 > 4 || 4 > 5);
console.log(`\n5 > 4 || 4 < 5: `, 5 < 4 || 4 >= 5);

// • Test whether an item is in a array

let items:string[] = ['Mango', 'Apple', "Watermelon", 'Banana'];

console.log(items);


console.log(`\nThis apple index in Array === 1: `,items.indexOf('Apple') === 1);

// • Test whether an item is not in a array

console.log(`\nThis Grapes index is not in Array: `,!items.indexOf('Grapes'));



