//create an object to keep track of values
const Calulator = {
    //this is displays 0 on the screen
    Display_Value: '0',
    //this will hold the first operand for any expressions, we set it to null for now
    First_Operand:null,
    //this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    //this will hold the operator. we set it to null for now
    operator: null,
};

//this modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calulator;
    //we are checking to see if Wait_Second_Operand is true and set 
    //Display_Value  to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calulator.Display_Value = digit;
        Calulator.Wait_Second_Operand = false;
    } else {
        //this overwrites Display_Value if the current value is 0 
        //otherwise it adds onto it
        Calulator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
//this section handl4es decimal points
function Input_Decimal(dot) {
    //this ensures tjat accidental clicking of the decimal point
    //doesn't cause bugs in your operation
    if (Calulator.Wait_Second_Operand === true) return;
    if (!Calulator.Display_Value.includes(dot)) {
    //we are saying ythat if the Display_Value does not contain a decimal point 
    //we want to add a decimal point
    Calulator.Display_Value += dot;
    }
}

//this section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calulator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in 
    //Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator and exits from the function
    if (operator && Calulator.Wait_Second_Operand) {
        Calulator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calulator.First_Operand = Value_of_Input;
    } else if (operator) {//Checks if an operator already exists}
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is preformed for the operator
        //in the Perform_Caluclation objectand the function that matches the 
        //operator is executed
        let result = Perform_Calculation [operator](Value_Now, Value_of_Input);
        //here we add a fixed amount of numbers after the decimal 
        result = Number (result).toFixed(9)
        //this will remove any trailing 0's
        result = (result * 1).toString()
        Calulator.Display_Value = parseFloat(result);
        Calulator.First_Operand = parseFloat(result);
    }
    Calulator.Wait_Second_Operand = true;
    Calulator.operator = Next_Operator; 
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=': (First_Operand, Second_Operand) => Second_Operand,
};

function Calculator_Reset() {
    Calulator.Display_Value = '0';
    Calulator.First_Operand = null;
    Calulator.Wait_Second_Operand = false;
    Calulator.operator = null;
}
//this function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calulator.Display_Value;
}

Update_Display();
//this section monitrs button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element that was clicked
    const {target} = event;
    //if the element that was clicked on is not a button, ecit the funciton
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
        return;
    }
    //ensures that AC clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    
    Input_Digit(target.value);
    Update_Display();
})