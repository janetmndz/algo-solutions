// Link to Codewars Kata: https://www.codewars.com/kata/sums-of-parts/
// Kata Level: 6kyu

function partsSums(ls) {
    if (ls.length <= 0) {return [0]}

    let t = [0]
    let s = 0
    ls.reverse().map(function(x){
        s += x
        t.push(s)
    })

    return t.reverse()
}