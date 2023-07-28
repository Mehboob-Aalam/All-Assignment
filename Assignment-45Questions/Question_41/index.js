"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magiciansNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magician) {
    for (let magicians of magician) {
        console.log(magicians);
    }
}
;
show_magicians(magiciansNames);
