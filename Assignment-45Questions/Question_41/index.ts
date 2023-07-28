//Exercise: 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//----------------------------------------------------------------------------------------------------------

 let magiciansNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
 function show_magicians(magician: string[]){
     for(let magicians of magician){
         console.log(magicians);
        
    }
 };
 show_magicians(magiciansNames);

