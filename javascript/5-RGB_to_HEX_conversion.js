// Link to Codewars Kata: https://www.codewars.com/kata/513e08acc600c94f01000001/
// Kata Level: 5kyu

function rgb(r, g, b){
    return [r, g, b].map( n => {
        if(n <= 0){return '00'}
        if(n >= 255){return 'FF'}
        return n.toString(16).length === 1 ? '0' + n.toString(16) : n.toString(16) 
    }).join('').toUpperCase()
}