"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ["John", "Jane", "Mike", "Anna"];
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("Nothing!");
}
// let users: string[] = ["John", "Jane", "Mike", "Anna"];
// while(users.length === 0){
//     let user = users.pop();
//     if(users.length === 0){
//         console.log("We need to find some users!");
//     }else{
//         console.log("dgfhdjh");
//     }
//     }