// Link to Codewars Kata: https://www.codewars.com/kata/523f5d21c841566fde000009/
// Kata Level: 6kyu

function array_diff(a, b) {
    return a.filter( n => !b.includes(n) )
}