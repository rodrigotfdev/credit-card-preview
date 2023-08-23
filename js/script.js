const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCVV = document.querySelector("#card-cvv");

const inputName = document.querySelector("#input_name");
const inputNumber = document.querySelector("#input_number");
const inputMonth = document.querySelector("#valid-month");
const inputYear = document.querySelector("#valid-year");
const inputCVV = document.querySelector("#cvv_input");

function nameReceive() {
  if (inputName.value == "") {
    cardName.innerHTML = "Jane Appleseed";
  } else {
    cardName.innerHTML = inputName.value;
  }
}

function numbersReceive() {
  if (inputNumber.value == "") {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  } else {
    cardNumber.innerHTML = inputNumber.value;
  }
}

function monthReceive() {
  if (inputMonth.value == "") {
    cardMonth.innerHTML = "00";
  } else {
    cardMonth.innerHTML = inputMonth.value;
  }
}

function yearReceive() {
    if (inputYear.value == "") {
        cardYear.innerHTML = "00";
      } else {
        cardYear.innerHTML = inputYear.value;
      }
}


