let number1;
let number2;
let op;
function add(num1, num2)
{
    return(num1 + num2);
} 
function subtract(num1, num2)
{
    return(num1-num2);
} 
function multiply(num1, num2)
{
    return(num1*num2);
} 
function divide(num1, num2)
{
    return(num1/num2);
} 
function operate(num1, op, num2)
{

    switch(op)
    {
        case "+":
            return (add(Number(num1), Number(num2)));
            break;
        case "-":
            return (subtract(Number(num1), Number(num2)));
            break;
        case "/":
            return (divide(Number(num1), Number(num2)));
            break;
        case "*":
            return(multiply(Number(num1), Number(num2)));
            break;
        case "Xn":
            break;
    }
}
function getButtonDown(btn)
{
    let displayText = document.getElementById("display");
    if(btn == "C")
    {
        displayText.innerText = "";
        number1 = null;
        number2 =null;
        op = null;
        return;
    }
    else if (isNaN(btn) && btn != ".")
    {
        if(btn == "=" && number1 != null)
        {
            number2 = displayText.innerText;
            displayText.innerText = operate(number1, op, number2);
            number1=displayText.innerText;
            number2=null;
            op=null;
            return;
        }

        if (number1 == null)
        {
            number1 = displayText.innerText;
            op = btn;
            displayText.innerText = "";
            console.log("you pressed " + btn + " and the first number is " + number1);
            return;
        }
        else if(number1 != null && number2 == null)
        {
            number2 = displayText.innerText;
            op = btn;
            displayText.innerText = "";
        }
        return;
    }
    if(displayText.innerText.length < 10 )
    {
        displayText.innerText += btn;
    }
}

let btns = document.querySelectorAll("#btn");

btns.forEach(function(i){
    i.addEventListener('click', function(){
        getButtonDown(i.innerText);
    });
});