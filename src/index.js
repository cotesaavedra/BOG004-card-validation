import validator from './validator.js';

const cardValidatorButton = () => {
    let creditCardNumber = document.getElementById("cardNumber").value;
    if (creditCardNumber === ""){
        document.getElementById("inputRequired").innerText = "Por favor ingresa los datos de tu tarjeta"; 
       return false
    }
    if(validator.isValid(creditCardNumber) === true){
        document.getElementById("dataOfCard").innerText = "Datos de la tarjeta: " + validator.maskify(creditCardNumber);
        document.getElementById("titleH2").innerText = "Muchas gracias";
        document.getElementById("content").style.display = "none";
        document.getElementById("validCardContent").style.display = "block";
    } else{
        document.getElementById("titleH2").innerText = "Ups! algo salió mal";
        document.getElementById("content").style.display = "none";
        document.getElementById("invalidCardContent").style.display = "block";
    }
}
//se le agrega al id #buttonPay el evento "click" y el nombre de la función "cardValidatorButton" a activarle
document.querySelector("#buttonPay").addEventListener("click", cardValidatorButton);
