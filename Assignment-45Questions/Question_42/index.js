"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magiciansName = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magician) {
    magician.forEach((magicians) => {
        console.log(`\n${magicians} the Great\n`);
    });
}
show_magicians(magiciansName);
console.log("\n---------------------------------------------------------------\n");
make_great(magiciansName);
