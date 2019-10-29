// Link to Codewars Kata: https://www.codewars.com/kata/count-the-smiley-faces/
// Kata Level: 6kyu

function countSmileys(arr) {
    var re = new RegExp('(\:|\;)(\-|\~)?(\[D]|\[\)])')
    return arr.filter(x => x.match(re)).length
}