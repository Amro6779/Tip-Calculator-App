const billInput = document.getElementById("bill-input");
const customTipInput = document.getElementById("custom-tip-input");
const peopleInput = document.getElementById("people-number-input");
const tipButton = document.querySelectorAll(".tip-button");
const tipAmount = document.getElementById("number1");
const total = document.getElementById("number2");
const resetButton = document.getElementById("reset-button");




tipButton.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        alert(button.innerText);
    })
})