// Link to Codewars Kata: https://www.codewars.com/kata/valid-phone-number/
// Kata Level: 6kyu

function validPhoneNumber(phoneNumber){
    let re = /^(\(\d{3}\))\s(\d{3}\-\d{4})$/
    return re.test(phoneNumber) 
}