const firstDigit = { val:"", isTaken: false }
const secondDigit = { val:"", isTaken: false }
let operator= multiply;
let operatorActive = false;

const display = document.querySelector(".displayRow");

const numbers = document.querySelectorAll(".secondaryKey");
numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (operatorActive) {
            display.textContent = ""; 
            operatorActive = false; 
        }
        display.textContent += button.textContent; 
    });
});
// numbers.forEach((num) => {
//     num.addEventListener('click', () => {
//         if(!firstDigit.isTaken){
//             display.textContent += num.textContent;
//         }else if(firstDigit.isTaken && !secondDigit.isTaken || display.textContent ==){
//             display.textContent = "";
//         }
        
//         if(!display.textContent == 0 && firstDigit.isTaken && secondDigit.isTaken){
//             display.textContent += num.textContent;
//         }
//         });
//     });

function operate(){
    return operator(firstDigit.val, secondDigit.val);
}

function add(){
    return firstDigit.val + secondDigit.val;
}

function subtract(){
    return firstDigit.val - secondDigit.val;
}

function multiply(){
    return firstDigit.val * secondDigit.val;
}

function divide(){
    return firstDigit.val / secondDigit.val;
}

//get the dom element with classes of primaryKey
const operators = document.querySelectorAll(".primaryKey, .tertiaryKey");
operators.forEach((key) => {
    key.addEventListener('click', () => {
        // if (key.id === "addBtn" || key.id === "subtractBtn" || key.id === "multiplyBtn" || key.id === "divideBtn") {
        //     operatorActive = true;
        // }
        
        // if(operatorActive){
        //     const result = operate();
        //     firstDigit.val = result;
        //     display.textContent = firstDigit.val;
        //     secondDigit.isTaken = false;
        //     console.log(firstDigit,secondDigit);
        //     return;
        // }

        if(key.id === "divideBtn") {
            operator = divide;
            operatorActive = true;
            console.log(operator);
        }else if(key.id === "multiplyBtn"){
            operator = multiply;
            operatorActive = true;
            console.log(operator);
        }else if(key.id === "subtractBtn"){
            operator = subtract;
            operatorActive = true;
            console.log(operator);
        }else if(key.id === "addBtn"){
            operator = add;
            operatorActive = true;
            console.log(operator);
        }else if(key.id === "clearBtn"){
            display.textContent = ""
            firstDigit.isTaken = false;
            firstDigit.val = "";
            secondDigit.isTaken = false;
            secondDigit.val = "";
            operatorActive = false;
            console.log(firstDigit,secondDigit);
            return;
        }else if(key.id === "back"){
            let currentDisplay = display.textContent
            let updatedDisplay = currentDisplay.slice(0, -1);
            display.textContent = updatedDisplay;
            console.log("back was clicked")
            return;
        }
        
        if(!firstDigit.isTaken){
            firstDigit.val = parseFloat(display.textContent);
            firstDigit.isTaken = true;
            console.log(firstDigit);
        }else if(firstDigit.isTaken && !secondDigit.isTaken){
            secondDigit.val = parseFloat(display.textContent);
            secondDigit.isTaken = true;
            console.log(secondDigit);
        };
        if(firstDigit.isTaken && secondDigit.isTaken || key.id === "operateBtn"){
            const result = operate();
            firstDigit.val = result;
            display.textContent = firstDigit.val;
            secondDigit.isTaken = false;
            console.log(firstDigit,secondDigit);
            return;
        };
    });
});
//for each element with the class of operators
    //add a click event
        //if primaryKey.id == add, then operator = add()
            //else if operators.id == subtract then operator = subtract()
            //else if operators.id == divide then operator = divide()
            //else if operators.id == multiply then operator = multiply()
            //else if operators.id == equals then call operate func
                //set firstDigit to not taken, and secondDigit
            //else if operators.id == clear then clear the display
                //set firstDigit to not taken, and secondDigit
                //break
            //else remove one letter from the string
                //break

        //if display has string
            //take the display
            //set stringToNum = parseFloat(display.textContent)
            //if firstDigit is not taken
                //firstDigit.val = stringToNum
                //firstDigit.isTaken = true
            //else if firstDigit is taken and secondDigit is not taken
                //secondDigit.val = stringToNum
                //secondDigit.isTaken = true
            //else if firstDigit and secondDigit are taken
                //call the operator function using the operator, firstDigit.val, and secondDigit.val
                //firstDigit.val = operate func
                //clear the display
                //show firstDigit.val in display
        //else does nothing

    
    
