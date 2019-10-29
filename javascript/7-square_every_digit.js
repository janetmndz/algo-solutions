// Link to Codewars Kata: https://www.codewars.com/kata/square-every-digit/
// Kata Level: 7kyu

function squareDigits(num){
    return Number(('' + num).split('').reduce((s, n) => s + `${n * n}`, ''))
}