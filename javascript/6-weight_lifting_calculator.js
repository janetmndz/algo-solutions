// Link to Codewars Kata: https://www.codewars.com/kata/59a8782bdbe3b04e740000cd/
// Kata Level: 6


function liftingCalc(w){
    let lift = (w - 20) / 2
    if (lift % 1.25 > 0 || lift < 0){return false}    
    return [20, 15, 10, 5, 2.5, 1.25].reduce( (arr, x) => {
        while (lift >= x && lift !== 0 ){
            lift -= x
            arr.push(x)
        }
    return arr}, [])
}