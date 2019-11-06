// Codewars Kata Link: https://www.codewars.com/kata/find-the-odd-int/
// Kata Level: 6kyu

function findOdd(A) {
    for(i = 0; i < A.length; i++){
        if ((A.filter( n => n === A[i]).length % 2) === 1){
            return A[i]
        }
    }
}