"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let Computer = {
    name: "computer",
    category: "Electronics",
    quantity: 2,
};
let pen = {
    name: "pen",
    category: "Stationery",
    quantity: 10,
};
let Bike = {
    name: "Bike",
    category: "Showroom",
    quantity: 5
};
let product = [Computer, pen, Bike];
console.log(`\nList of items is: \n`);
console.log(product);
