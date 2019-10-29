// Link to Codewars Kata: https://www.codewars.com/kata/atm-money-counter/
// Kata Level: 6kyu

function atm(value) {
    var regexLetters= /[a-zA-Z]/g;
    var regexNumbers = /\d/g;
    var currency = value.match(regexLetters).join('').toUpperCase();
    var currencyvalue = value.match(regexNumbers).join('');

    if(!(Object.keys(VALUES).includes(currency))){
        return `Sorry, have no ${currency}.`;
    }
    else{
        var minamount = VALUES[currency][0];
        if(currencyvalue % minamount !== 0){
        return `Can\'t do ${currencyvalue} ${currency}. Value must be divisible by ${minamount}!`;
        }
        else{
            let total = currencyvalue;
            let output = [];
        
        for( i = (VALUES[currency].length -1); i >= 0; i--){
            if(total !== 0 ){
            var numberbills = Math.floor(total/VALUES[currency][i]);
            total -= (numberbills*VALUES[currency][i])
            if(numberbills !== 0){
                output.push(`${numberbills} * ${VALUES[currency][i]} ${currency}`)
            }
            }
        }
        return output.join(", ");
        }
    }
}