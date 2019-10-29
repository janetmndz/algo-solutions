// Link to Codewars Kata: https://www.codewars.com/kata/custom-array-filters/
// Kata Level: 6kyu

Array.prototype.even = function(){
    return this.filter(n => (n % 2) === 0 && Number.isInteger(n))
}

Array.prototype.odd = function(){
    return this.filter(n => (n % 2) != 0 && Number.isInteger(n))
}

Array.prototype.under = function(x){
    return this.filter(n => (n < x) && Number.isInteger(n))
}

Array.prototype.over = function(x){
    return this.filter(n => (n > x) && Number.isInteger(n))
}

Array.prototype.inRange = function(min,max){
    return this.filter(n => (n <= max) && (n >= min) && Number.isInteger(n))
}