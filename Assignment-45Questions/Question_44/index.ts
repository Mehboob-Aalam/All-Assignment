//Exercise: 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//---------------------------------------------------------------------------------------------

function OrderSandwich(...items:string[]){
    console.log("\nSandwich Order Summary: \n");
if(items.length === 0){
    console.log("You ordered an empty sandwich. Please add some items.");
    
    
}else{
    console.log(`Making a sandwich with ${items.join(`, `)}`);
}
console.log("----------------------------------------");

}
OrderSandwich("Tomato", "Mayonnaise", "lettuce");
OrderSandwich("Ham", "Cheese");
OrderSandwich();