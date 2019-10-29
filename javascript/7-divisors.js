// Link to Codewars Kata: https://www.codewars.com/kata/544aed4c4a30184e960010f4/
// Kata Level: 7kyu

function divisors(integer) {
    let divisors = []

    for (i = 2; i < integer; i++){
        if((integer % i) == 0){
            divisors.push(i);
        }
    }

    return divisors.length !== 0 ?  divisors :  integer + " is prime"
}