function add(num1, num2)
{
    console.log("add " + num1 + " and " + num2);
} 
function subtract(num1, num2)
{
    console.log("subtract " + num1 + " and " + num2);
} 
function multiply(num1, num2)
{
    console.log("multiply " + num1 + " and " + num2);
} 
function divide(num1, num2)
{
    console.log("divide " + num1 + " and " + num2);
} 
function operate(equation)
{
    switch(equation[1])
    {
        case "+":
            break;
        case "-":
            break;
        case "/":
            break;
        case "*":
            break;
        case "^":
            break;
    }
}
function getButtonDown(btn)
{
    let displayText = document.getElementById("display");
    displayText.innerText = btn;
}

let btns = document.querySelectorAll("#btn");

btns.forEach(function(i){
    i.addEventListener('click', function(){
        getButtonDown(i.innerText);
    });
});