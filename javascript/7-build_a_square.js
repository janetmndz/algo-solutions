// Link to Codewars Kata: https://www.codewars.com/kata/build-a-square/
// Kata Level: 7kyu

function generateShape(int){
    let square= ''
    let col = 0
    for (i = 0; col < int; i++){
        for (n = 0; n < int; n++){
            square += '+';
        }
        if(col !== int-1){
            square += '\n'
        }
        col++
    }
    return square
}