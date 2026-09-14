const billInput = document.getElementById("bill-amount");
const tipButton = document.querySelectorAll(".tip-button");
const customTipInput = document.getElementById("custom-tip");
const numberOfPeople = document.getElementById("people-number-input");
const tipAmount = document.getElementById("number1");
const total = document.getElementById("number2");
const resetButton = document.getElementById("reset-button");

let tipPercent = 0;

tipButton.forEach((button) => {
  button.addEventListener("click", () => {
    tipPercent = parseFloat(button.innerText);
    calculateTipAmount();
  });
});



billInput.addEventListener("input" , calculateTipAmount);
numberOfPeople.addEventListener("input" , calculateTipAmount);
customTipInput.addEventListener("input" , calculateTipAmount);

function calculateTipAmount(){
    if (customTipInput.value != "") {
        tipPercent = Number(customTipInput.value);
    }

    let tipTotal = billInput.value * (tipPercent / 100);
    let tipPerPerson = tipTotal / numberOfPeople.value;
    let totalPerPerson = (Number(billInput.value) + tipTotal) / numberOfPeople.value
    tipAmount.innerText = tipPerPerson.toFixed(2);
    total.innerText = totalPerPerson.toFixed(2);
};