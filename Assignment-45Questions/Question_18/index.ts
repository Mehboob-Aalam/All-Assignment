//Exercise: 18

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//-------------------------------------------------------------------------------------------------------------------------------

// Question 17:Seeing the world

// • Store the locations in a array. Make sure the array is not in alphabetical order.

const places: string[] = ["Pakistan", "Bangladash", "India", "Sudia Arabia", "Qatar"];

// • Print your array in its original order.
 console.log("\nOriginal Order: \n", places);

 // • Print your array in alphabetical order without modifying the actual list.

 places.sort();
console.log("\nAlphabetical order: \n", places);

// • Show that your array is still in its original order by printing it.

 console.log("\nShow that your array is still in its original order: \n", places);
 
 // • Print your array in reverse alphabetical order without changing the order of the original list.

 places.sort((a , b) => b.localeCompare(a));
 console.log("\nReverse Alphabetical Order: \n", places);

 // • Show that your array is still in its original order by printing it again.

console.log("\nArray is still in its original order: \n", places);

// • Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("\nReverse the order: \n", places);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("\nReverse the order again: \n", places);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

places.sort();
console.log("\nAlphabetical order: \n", places);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

places.sort((a , b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order: \n", places);
