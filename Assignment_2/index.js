"use strict";
// Create a grading system that takes subject marks as input from the user through prompts and returns the corresponding grades using functions and if-else conditions.
//----------------------------------------------------------------------------------
function calculateGrade() {
    const promptSync = require("prompt-sync")();
    let marks = promptSync("Enter your Marks.");
    if (marks >= 90 && marks <= 100) {
        return "Grade A+";
    }
    else if (marks >= 80 && marks <= 89) {
        return "Grade A";
    }
    else if (marks >= 70 && marks <= 79) {
        return "Grade B";
    }
    else if (marks >= 60 && marks <= 69) {
        return "Grade C";
    }
    else if (marks >= 50 && marks <= 59) {
        return "Grade D";
    }
    else if (marks >= 0 && marks <= 49) {
        return "Fail";
    }
    else {
        return "Invalid Number";
    }
}
let grade = calculateGrade();
console.log(`Your grade is: ${grade}`);
