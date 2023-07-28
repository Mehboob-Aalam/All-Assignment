//Exercise: 03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//--------------------------------------------------------------------------------------------------------

let name1: string = "mUhaMmad mEHboOb AlaM";

//  to lower case

 let lowercaseName = name1.toLowerCase();
 console.log("Lowercase:", lowercaseName)

//  to upper case

 let uppercaseName = name1.toUpperCase();
 console.log("Upper case name:", uppercaseName)

//Title case

let word: string[] = name1.split(" ");
let titleCaseName: string = "";
for(let i = 0 ; i < word.length; i++){
    titleCaseName += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() +" "

};
console.log(titleCaseName);
