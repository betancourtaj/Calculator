const number = $(".number");
const operator = $(".operator");
const decimal = $(".decimal");
const clear = $(".clear");
const equal = $(".equal");
const display = $('.display');
let answer = '';
const currentNum = '';
let prevNum = '';
let displayStr = '';
var clearPressed = false;
var operatorPressed = false;
var decimalPressed = false;
var additionOperator = false;
var subtractionOperator = false;
var multiplicationOperator = false;
var divisionOperator = false;

number.on('click', function ()  {
    const currentNum = this.innerHTML;

    if (operatorPressed == true && decimalPressed == false){
        displayString(currentNum);
        operatorPressed = false;
    }  else if (operatorPressed == true && decimalPressed == true) {
        displayString(currentNum);
        operatorPressed = false;
        decimalPressed = false;
    } else {
        displayString(currentNum);
    }
});

operator.on('click', function () {
    const btnClicked = this.innerHTML;
    findOperation(btnClicked);
    console.log("you clicked: ", btnClicked);
    prevNum = display.text();;
    displayStr = '';
});

equal.on('click', function () {
    answer = performOperation( parseFloat(prevNum), parseFloat(displayStr) );
    console.log("answer is: " + answer);
    display.html(answer);
    displayStr = display.text();
});

clear.on('click', function () {
    displayStr = '';
    prevNum = '';
    display.html('0');
});

decimal.on('click', function (){
    let btnClicked = this.innerHTML;

    if (displayStr == ''){
        btnClicked = '0' + this.innerHTML;
    }

    if (operatorPressed == false){
        displayString(btnClicked);
    } else {
        displayString(btnClicked);
        operatorPressed = false;
        decimalPressed = true;
    }
})

function displayString(num) {
    displayStr = displayStr + num;
    display.html(displayStr);
    console.log("current string: " + displayStr);
}

function findOperation(btnClicked) {
    operatorPressed = true;
    if ( isAddition(btnClicked) ){
        additionOperator = true;
    } else if ( isSubtraction(btnClicked) ) {
        subtractionOperator = true;
    } else if ( isMultiplication(btnClicked) ) {
        multiplicationOperator = true;
    } else if ( isDivision(btnClicked) ) {
        divisionOperator = true;
    }
}

function performOperation(displayStr, btnContents) {
    if ( additionOperator == true ){
        additionOperator = false;
        return displayStr + btnContents;
    } else if ( subtractionOperator == true ) {
        subtractionOperator = false;
        return displayStr - btnContents;
    } else if ( multiplicationOperator == true ) {
        multiplicationOperator = false;
        return displayStr * btnContents;
    } else if ( divisionOperator == true ) {
        divisionOperator = false;
        return displayStr / btnContents;
    } else {
        console.log("no operator was pressed");
    }
}

function isAddition(btnClicked) {
    if (btnClicked == "+") {
        return true;
    }
    return false;
}

function isSubtraction(btnClicked) {
    if (btnClicked == "-") {
        return true;
    }
    return false;
}

function isMultiplication(btnClicked) {
    if (btnClicked == "X") {
        return true;
    }
    return false;
}

function isDivision(btnClicked) {
    if (btnClicked == "/") {
        return true;
    }
    return false;
}