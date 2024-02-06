//Large steps
//Create basic math operator functions
//Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console.
// add
// subtract
// multiply
// divide
// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
// Create a new function

//digits to hold
let digitOne;
let digitTwo;

const display = document.querySelector(".displayRow");
// const displayToInt= parseInt(display.innerHTML);

const operate = (operator,digitOne,digitTwo) => {
    return operator(digitOne,digitTwo);
}

function add(digitOne, digitTwo){
    return digitOne + digitTwo;
}

function subtract(digitOne, digitTwo){
    return digitOne - digitTwo;
}

function multiply(digitOne, digitTwo){
    return digitOne * digitTwo;
}

function divide(digitOne, digitTwo){
    return digitOne / digitTwo;
}

//Event handlers for all id's
const secondaryKeys = document.querySelectorAll(".secondaryKey");
secondaryKeys.forEach(currentBtn => {
    currentBtn.addEventListener("click", () => {
        // Concatenate the current button's content to the display's content
        display.textContent += currentBtn.textContent;
    });
});
//when a user presses a secondaryKey, I must store the display

const primaryKeys = document.querySelectorAll(".primaryKey");
primaryKeys.forEach(currentBtn => {
    currentBtn.addEventListener("click", () => {
        digitOne = 
    });
});