//set firsDigit =
//val:0
//isTaken: false
const firstDigit = { val:4, isTaken: false }

//set secondDigit =
//val:0
//isTaken: true
const secondDigit = { val:4, isTaken: false }

//let operator
let operator= add();

//get the dom element display
const display = document.querySelector(".displayRow");

//for each element with the class of secondaryKey
    //add a click event
        //if firstDigit or secondDigit are taken
            //clear display text
            //append button text to the display text
const numbers = document.querySelectorAll(".secondaryKey");
numbers.forEach((num) => {
    num.addEventListener('click', () => {
        if(!firstDigit.isTaken){
            display.textContent += num.textContent;
        } else if(firstDigit.isTaken && !secondDigit.isTaken ){
            display.textContent += num.textContent;
        }});
    });

//function operate(operator, firstDigit, secondDigit)
function operate(operator, firstDigit, secondDigit){
    
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

    
    
