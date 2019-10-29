// Link to Codewars Kata: https://www.codewars.com/kata/get-the-middle-character/
// Kata Level: 7kyu

function getMiddle(s){
    let l = s.split('')
    let m = Math.floor(l.length/2)
    return (l.length % 2 !== 0) ? l[m] : `${l[m-1]}${l[m]}`
}