//Global objects to help our 'operate' logic
const digitOne = { val: "", isTaken: false, }
const digitTwo = { val: "", isTaken: false, }
const operator = { func: undefined }
const buttons = { val: "", }

//If we want to update the display on the calculator
const display = document.querySelector(".displayRow");

//Capture the DOM's event obj while bubbling to get all button types
const delegatedContainer = document.querySelector(".calculatorContainerColumn");

delegatedContainer.addEventListener('click', event => {
    const target = event.target
    if(target.tagName === 'BUTTON'){ //NEEDS TO EXCLUDE OPERATOR BTNS
        handleButtonEvents()
       //send to a function that filters string as either operator or digit
    }
});

//Handles the buttons.val
function handleButtonEvents(){
    if(buttons.val)
}

//Math operator functions which will be used to update the .func property
//in the operator obj
function add(){
    return parseFloat(digitOne.val) + parseFloat(digitTwo.val);
}

function subtract(){
    return parseFloat(digitOne.val) - parseFloat(digitTwo.val);
}

function multiply(){
    return parseFloat(digitOne.val) * parseFloat(digitTwo.val);
}

function divide(){
    return parseFloat(digitOne.val) / parseFloat(digitTwo.val);
}


