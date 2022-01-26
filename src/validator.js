const validator = {
  isValid: (creditCardNumber) => {
    let finalValueSumCard = 0;
    //VARIABLE PARA CONTAR EL NUMERO DE CARACTERES DE LA TARJETA
    let stringLenght = creditCardNumber.length;
    //CREANDO UN ARRAY VACIO PARA AGREGARLE LOS VALORES OBTENIDOS DESDE EL FOR
    let valueAll = [];
    //EL FOR SE EJECUTARÁ A PARTIR DE I (POSICION) = 0 HASTA QUE I SEA IGUAL A LA CANTIDAD DE CARACTERES DE LA TARJETA (stringLeght) (15)
    //EL FOR IRÁ LLENANDO EL ARRAY CON LOS VALORES QUE ESTAN EN LAS POSICIONES DE i CONVERTIDOS A ENTEROS,
    for (var i = 0; i < stringLenght; i++){
      valueAll.push(parseInt(creditCardNumber.charAt(i)));
    }
    //EL NUEVO ARRAY SE DARÁ VUELTA
    valueAll = valueAll.reverse();
    //EL BUCLE FOR EACH SE EJECUTARÁ POR CADA ELEMENTO DEL ARRAY E IRÁ ACTUALIZANDO EL VALOR DE finalValueSumCard
    valueAll.forEach((element,posicion) => {
      //POSICION IMPAR EN EL CODIGO (NO EN EL ALGORITMO DE LUHN)
      if (posicion % 2 !== 0){
        let valueMultiplication = element * 2;
        //SI EL RESULTADO ES DE DOS DIGITOS
        if (valueMultiplication >=10){
          let valueString = valueMultiplication.toString();
          let sumTwoDigits = parseInt(valueString.charAt(0)) + parseInt(valueString.charAt(1));
          finalValueSumCard = finalValueSumCard + sumTwoDigits;
        //SI EL RESULTADO ES DE UN DIGITO
        }else{
          finalValueSumCard = finalValueSumCard + valueMultiplication;
        }
      //SI LA POSICION ES PAR EN EL CODIGO (NO EN EL ALGORITMO DE LUHN)
      }else{
        finalValueSumCard = finalValueSumCard + element;
      }
    });
    if (finalValueSumCard % 10 === 0 ){
      console.log ("es true");
      return true
    } else if (finalValueSumCard % 10 !== 0 ){
      console.log ("es false");
      return false
    }
  },
  maskify: (creditCardNumber) =>{
    let digits = [];
    for (let i = 0; i < creditCardNumber.length; i++){
      if(i < creditCardNumber.length-4){
        digits.push("#");
      }else{
        digits.push(creditCardNumber[i]);
      }
    }
    return digits.join("");
  }
};

export default validator; 
//9083952015263123
