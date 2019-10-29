// Link to Codewars Kata: https://www.codewars.com/kata/your-order-please/
// Kata Level: 6kyu

function order(words){
    if (words <= 0){return ""}
    let re = /\d+/
    let index = []
    words.split(' ').map(x => index.push([x.match(re)[0], x]))
    return index.sort().map(x => x[1]).join(' ')
}