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

inputNumber.addEventListener("keypress", () => {
  let numberLength = inputNumber.value.length;

  if (numberLength === 4 || numberLength === 9 || numberLength === 14) {
    inputNumber.value += " ";
  }
});

function nameReceive() {
  if (inputName.value == "") {
    cardName.innerHTML = "Jane Appleseed";
  } else {
    cardName.innerHTML = inputName.value;
  }

  let error = document.querySelector(".error-empty-name");
  error.style.display = "none";
}

function numbersReceive() {
  if (inputNumber.value == "") {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  } else {
    cardNumber.innerHTML = inputNumber.value;
  }

  let error = document.querySelector(".error-empty-number");
  error.style.display = "none";
}

function monthReceive() {
  if (inputMonth.value == "") {
    cardMonth.innerHTML = "00";
  } else {
    cardMonth.innerHTML = inputMonth.value;
  }

  let error = document.querySelector(".error-empty-date");
  error.style.display = "none";
}

function yearReceive() {
  if (inputYear.value == "") {
    cardYear.innerHTML = "00";
  } else {
    cardYear.innerHTML = inputYear.value;
  }

  let error = document.querySelector(".error-empty-date");
  error.style.display = "none";
}

function cvvReceive() {
  if (inputCVV.value == "") {
    cardCVV.innerHTML = "00";
  } else {
    cardCVV.innerHTML = inputCVV.value;
  }

  let error = document.querySelector(".error-empty-cvv");
  error.style.display = "none";
}

function dataValidation(){

    const sucessScreen = document.querySelector('.wrapper')

    let number = inputNumber.value
    let numberTrim = number.replaceAll(" ", '')
    let updatedNumber = parseInt(numberTrim)

    let name = inputName.value
    let monthValid = inputMonth.value 
    let yearValid = inputYear.value
    let cvv = inputCVV.value

    let numberCheck = undefined
    let nameCheck = undefined
    let dateCheck = undefined
    let cvvCheck = undefined

    console.log(updatedNumber)
    
    if(number === '' || number == undefined || number == null || number.length < 19){
       let error = document.querySelector('.error-empty-number');
       error.style.display = 'block'
       numberCheck = false
    } else if (isNaN(updatedNumber)){
        let error = document.querySelector('.error-invalid-number');
        error.style.display = 'block'
        numberCheck = false
    } else {
        numberCheck = true
    }

    if (name === '' || name == undefined || name == null){
        let error = document.querySelector('.error-empty-name');
       error.style.display = 'block'
       numberCheck = false
    } else{
        nameCheck = true
    }

    if (monthValid === '' || yearValid === '' ){
        let error = document.querySelector('.error-empty-date');
        error.style.display = 'block'
        numberCheck = false
    } else {
        dateCheck = true
    }

    if(cvv === '' || cvv == undefined || cvv == null || cvv.length < 3){
        let error = document.querySelector('.error-empty-cvv');
        error.style.display = 'block'
        numberCheck = false
     } else {
        cvvCheck = true
     }



     if (numberCheck === true && nameCheck === true && dateCheck === true && cvvCheck === true){
        sucessScreen.style.display = 'block'
     }
    
  }

  function closePopUp(){
    const sucessScreen = document.querySelector('.wrapper')
    sucessScreen.style.display = 'none'
    window.location.reload()
  }
