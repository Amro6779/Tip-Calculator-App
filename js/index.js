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
    tipButton.forEach((otherButton) => {
      otherButton.classList.remove("active");
    });
    button.classList.add("active");
    resetButton.classList.remove("disabled");
    resetButton.classList.remove("opacity-25");
    tipPercent = parseFloat(button.innerText);
    calculateTipAmount();
  });
});

billInput.addEventListener("input", calculateTipAmount);
billInput.addEventListener("blur", () => {
  if (billInput.value == 0 || billInput.value == "") {
    billInput.classList.add("is-invalid");
  } else {
    billInput.classList.remove("is-invalid");
  }
  calculateTipAmount();
});

numberOfPeople.addEventListener("blur", () => {
  if (numberOfPeople.value == 0 || numberOfPeople.value == "") {
    numberOfPeople.classList.add("is-invalid");
  } else {
    numberOfPeople.classList.remove("is-invalid");
  }
  calculateTipAmount();
});

customTipInput.addEventListener("input", () => {
  if (customTipInput.value != "") {
    tipPercent = Number(customTipInput.value);
    tipButton.forEach((button) => {
      button.classList.remove("active");
    });
  } else {
    tipPercent = 0;
  }
  calculateTipAmount();
});

resetButton.addEventListener("click", reset);

function calculateTipAmount() {
  if (numberOfPeople.value == "" || numberOfPeople.value == 0) {
    tipAmount.innerText = "0.00";
    total.innerText = "0.00";
    return;
  }
  let tipTotal = billInput.value * (tipPercent / 100);
  let tipPerPerson = tipTotal / numberOfPeople.value;
  let totalPerPerson =
    (Number(billInput.value) + tipTotal) / numberOfPeople.value;

  tipAmount.innerText = tipPerPerson.toFixed(2);
  total.innerText = totalPerPerson.toFixed(2);
  resetButton.classList.remove("disabled");
}

function reset() {
  tipButton.forEach((button) => {
    button.classList.remove("active");
  });
  billInput.value = "";
  customTipInput.value = "";
  numberOfPeople.value = "";
  tipAmount.innerText = "0.00";
  total.innerText = "0.00";
  tipPercent = 0;
  resetButton.classList.add("disabled");
  resetButton.classList.add("opacity-25");
}
