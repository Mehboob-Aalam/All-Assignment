"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest . who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest = ["Zia Khan", "Usman", "Afaq"];
// • Modify your list, replacing the name of the guest
guest.splice(2, 1, "Ali");
for (let newGuest of guest) {
    console.log(`Dear ${[newGuest]},
     we would be honored to have you at our dinner. Your genius and contributions to physics have inspired generations. Please join us for an evening of stimulating conversation and delightful company."

`);
}
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log("Unfortunately, Afaq can't make it to dinner. I have invited Ali instead.");
//• Print a second set of invitation messages, one for each person who is still in your list.
console.log("-------------------------------------------------------------------------------");
console.log("\n Print a second set of invitation messages, one for each person who is still in your list.");
for (let newGuest of guest) {
    console.log(`\n Dear ${[newGuest]},
     we would be honored to have you at our dinner. Your genius and contributions to physics have inspired generations. Please join us for an evening of stimulating conversation and delightful company." 

`);
}
