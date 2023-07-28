"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest = ["Zia Khan", "Usman", "Afaq", "Ali", "Ahmad", "Akbar"];
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("\nI can only invite two people for dinner.");
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guest.length > 2) {
    let removeGuest = guest.pop();
    console.log(`\nSorry, ${removeGuest}, we can't invite you to dinner.`);
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("\n------------------------------------------------");
console.log(`Dear ${guest[0]}, you're still invited to dinner.\n`);
console.log(`Dear ${guest[1]}, you're still invited to dinner.\n`);
// Remove the last two names from your list, so you have an empty list
guest.pop();
guest.pop();
// Print your list to make sure you actually have an empty list at the end of your program.
console.log("My guest list is now empty.\n");
console.log("Final guest list", guest);
