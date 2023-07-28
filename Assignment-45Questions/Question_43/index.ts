//Exercise: 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//---------------------------------------------------------------------------------------------------------------

let magiciansName:string[] = ['Alice', 'Bob', 'Charlie', 'David Copperfield', 'Harry Houdini'];

// Function to add "Great" to each magician's name

function make_great(magician:string[]){
    let greatMagician:string[] = [];
    for(let magicians of magician){
        greatMagician.push(`${magicians} the Great.`)
    }
    return greatMagician;
}
let greatMagician:string[] = make_great(magiciansName);

// Function to show the magicians' names

function show_magicians(magicians:string[]){
    for(let magician of magicians){
        console.log(magician);
        
    }
}
console.log("\nOriginal Magicians: \n");
show_magicians(magiciansName);
console.log("--------------------------------------------------------------------------");

console.log("\nGreat Magicians: \n");
show_magicians(greatMagician);
