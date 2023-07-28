//Exercise: 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//----------------------------------------------------------------------------------

//print a message indicating the number of people you are inviting to dinner
let guest: string[] = ["Usman", "Zia khan", "Afaq"];

console.log("\nI am inviting " + guest.length + " number of people.\n");
console.log("\n" + [guest] +"\n");

// Changing Guest List

guest.splice(0, 1, "Ali");
console.log(`\nI am sorry, Usman can't make it to dinner.\n`);
console.log(`\nI am now inviting in Ali on dinner.\n`);
console.log(`\nI am now inviting ${guest.length} people to dinner.\n`);
console.log("\n" +[guest] +"\n");





//Invite more guest

let newGuest: string[] = ["Ahmad", "Akbar", "Amjad"];

guest.unshift(newGuest[0]);
guest.splice(3, 0, newGuest[1]);
guest.push(newGuest[2]);

console.log(`I found a bigger dinner table, so I am inviting ${guest.length} people to dinner.);
`);

console.log(`\n${[guest]}\n`);

// Shrinking Guest List

console.log("\nI can only invite two people to dinner.\n");


while(guest.length > 2){
    //let guests = guest.pop();
    console.log(`\nSorry, ${guest.pop()}, I can't invite you to dinner.\n`);
    
}
//Number of guest

console.log(`\nI am inviting ${guest.length} people to dinner.\n`);

console.log(`\nI am still inviting ${guest[0]} and ${guest[1]} to dinner party\n`);


guest.pop(); guest.pop();

console.log(`\nI am inviting ${guest.length} people to dinner.\n`);


console.log(`\nI am not invite any people in dinner.\n`);

console.log(guest);

