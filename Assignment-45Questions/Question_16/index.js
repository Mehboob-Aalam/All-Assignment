"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest = ["Zia Khan", "Usman", "Afaq"];
console.log("\nI found a bigger dinner table!");
// • Add one new guest to the beginning of your array.
guest.unshift("Ali");
// • Add one new guest to the middle of your array.
guest.splice(2, 0, "Ahmad");
// Use append() to add one new guest to the end of your list.
guest.push("Akbar");
// Print a new set of invitation messages, one for each person in your list.
for (let newGuest of guest) {
    console.log(`\nDear ${[newGuest]},\nYou are cordially invited to dinner at my place. The dinner will be an opportunity to have engaging conversations and celebrate your remarkable contributions to the world.\nLooking forward to your presence!\nBest regards,\n`);
}
