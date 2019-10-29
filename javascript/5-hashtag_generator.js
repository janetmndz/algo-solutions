// Link to CodeWars Kate: https://www.codewars.com/kata/52449b062fb80683ec000024/
// Kata Level: 5kyu

function generateHashtag (str) {
    let s = str.replace(/\s\s+/g, ' ')
    if (s === " " || s === ""){return false}
    return s.length >= 140 ? false : '#' + str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}