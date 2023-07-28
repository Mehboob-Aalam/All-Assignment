//Exercise: 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//--------------------------------------------------------------------------------------------------------------------------------

interface items{
    name: string
    category: string
    quantity: number
}
let Computer: items ={
    name : "computer",
    category:"Electronics",
    quantity: 2,

}
let pen:items = {
    name: "pen", 
    category: "Stationery",
    quantity: 10,
}
let Bike:items = {
    name: "Bike",
    category: "Showroom",
    quantity: 5
}
 let product: items[] = [Computer, pen , Bike];
 console.log(`\nList of items is: \n`);
  console.log(product);
 
 