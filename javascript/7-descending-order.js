// Link to Codewars Kata: https://www.codewars.com/kata/descending-order/
// Kata Level: 7kyu

function descendingOrder(n){
    return Number([...''+n].sort((a, b) => b - a).join(''))
}