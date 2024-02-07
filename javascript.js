//set firsDigit =
//val:0
//isTaken: false

//set secondDigit =
//val:0
//isTaken: false

//let operator

//user clicks button
//take the button text
//display the button text

//function operate(operator, firstDigit, secondDigit)
    //


//get the dom element display

//get the dom element with classes of operators

//get the dom element with classes of numbers

//for each element with the class of numbers
    //add a click event
        //if firstDigit or secondDigit are taken
            //clear display text
            //append button text to the display text

//for each element with the class of operators
    //add a click event
        //if operators.id == add then operator = add()
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
            //else if secondDigit is not taken
                //secondDigit.val = stringToNum
                //secondDigit.isTaken = true
            //else if firstDigit and secondDigit are taken
                //call the operator function using the operator, firstDigit.val, and secondDigit.val
                //store the return in firstDigit.val
                //clear the display
                //show firstDigit.val in display
                //display the return of the operate func
            
        //else does nothing

    
    
