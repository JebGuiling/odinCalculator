function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function operate(operator, num1, num2){
    if(operator == "+"){
        return add(num1, num2);
    }
    else if(operator == "-"){
        return subtract(num1,num2);
    }
    else if(operator == "x"){
        return multiply(num1,num2);
    }
    else if(operator == "/"){
        return divide(num1,num2);
    }

}


let num1 = 0;
let num2 = 0;
let operator = "";

const btn = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");

const multiplybtn = document.querySelector(".multiply");
const dividebtn = document.querySelector(".divide");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

btn.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";
    let text = document.createElement("p")
    text.textContent = "1";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 1;
    }else{
        num2 = 1;
    }
})
btn2.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p")
    text.textContent = "2";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 2;
    }else{
        num2 = 2;
    }
})
btn3.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p")
    text.textContent = "3";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 3;
    }else{
        num2 = 3;
    }
})
btn4.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p")
    text.textContent = "4";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 4;
    }else{
        num2 = 4;
    }
})
btn5.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p")
    text.textContent = "5";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 5;
    }else{
        num2 = 5;
    }
})
btn6.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p")
    text.textContent = "6";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 6;
    }else{
        num2 = 6;
    }
})
btn7.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p")
    text.textContent = "7";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 7;
    }else{
        num2 = 7;
    }
})
btn8.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p")
    text.textContent = "8";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 8;
    }else{
        num2 = 8;
    }
})
btn9.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p")
    text.textContent = "9";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 9;
    }else{
        num2 = 9;
    }
})
btn10.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";

    let text = document.createElement("p");
    text.textContent = "10";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
    if(num1 == 0){
        num1 = 10;
    }else{
        num2 = 10;
    }
})



plus.addEventListener("click", () =>{
    
    document.querySelector(".display").innerHTML = "";
    let text = document.createElement("p");
    let text2 = document.createElement("p");

    text.textContent = "+";
    let ans = operate(operator, num1, num2);
    text2.textContent = ans
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");

    text2.setAttribute("style", "font-size : 30px; margin-left: 10px;");

    if(num2 != 0){
        num1 = ans;
        num2 = 0; 

    }

    display.appendChild(text2);
    display.appendChild(text);

    operator = "+"
})
minus.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";
    let text2 = document.createElement("p");

    let text = document.createElement("p")
    text.textContent = "-";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    text2.setAttribute("style", "font-size : 30px; margin-left: 10px;");

    let ans = operate(operator, num1, num2);
    text2.textContent = ans
    if(num2 != 0){
        num1 = ans;
        num2 = 0; 

    }
      
    document.querySelector(".display").innerHTML = "";

    display.appendChild(text2);
    display.appendChild(text);

  
    operator = "-";
})
dividebtn.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";
    let text2 = document.createElement("p");

    let text = document.createElement("p")
    text.textContent = "/";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    text2.setAttribute("style", "font-size : 30px; margin-left: 10px;");


    let ans = operate(operator, num1, num2);
    text2.textContent = ans
    if(num2 != 0){
        num1 = ans;
        num2 = 0; 

    }
      
    document.querySelector(".display").innerHTML = "";

    display.appendChild(text2);
    display.appendChild(text);

    operator = "/";
})

multiplybtn.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";
    let text2 = document.createElement("p");

    let text = document.createElement("p")
    text.textContent = "x";
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    text2.setAttribute("style", "font-size : 30px; margin-left: 10px;");

    let ans = operate(operator, num1, num2);
    text2.textContent = ans
    if(num2 != 0){
        num1 = ans;
        num2 = 0; 

    }
      
    document.querySelector(".display").innerHTML = "";

    display.appendChild(text2);
    display.appendChild(text);
    operator = "x";
})

equals.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";
    let text = document.createElement("p")
    let ans = operate(operator, num1, num2);
    text.textContent = ans
    num1 = ans;
    num2 = 0;
    text.setAttribute("style", "font-size : 30px; margin-left: 10px;");
    display.appendChild(text);
})

clear.addEventListener("click", () =>{
    document.querySelector(".display").innerHTML = "";
    num1 = 0;
    num2 = 0;
    operator = 0;

})