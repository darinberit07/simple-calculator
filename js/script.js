let displayBox = document.getElementById("calc-screen");
let buttons = document.querySelectorAll("button");
let expression = "";

let buttonArray = Array.from(buttons);
buttonArray.forEach(button => {
    button.addEventListener("click", (event) => {
        const val = event.target.value;
        if(val == "all-clear"){
            expression = "";
            displayBox.value = expression || 0;
        }
        else if(val == "clear"){
            expression = expression.slice(0,length-1);
            displayBox.value = expression || 0;
        }
        else if(val == "="){
            expression = eval(expression);
            displayBox.value = expression;
        }
        else{
            expression += val;
            displayBox.value = expression;
        }
        

    })
})