"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Create an array of cities
let cities = ["Islamabad", "Lahore", "Peshawar", "Faisalabad", "Karachi", "Multan", "Sargodha"];
console.log("\nList of cities\n");
cities.forEach((city, index) => {
    console.log(`${index + 1}. ${city}`);
});
