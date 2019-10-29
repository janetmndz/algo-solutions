// Link to Codewars Kata: https://www.codewars.com/kata/vowel-count/
// Kata Level: 7kyu

function getCount(str) {
    var vowelsCount = 0;
    const slicedStr = [...str]
    let vowels = ['a','e','i','o','u']
    
    for(i=0; i < slicedStr.length; i++){
        if(vowels.includes(slicedStr[i])){
            vowelsCount++
        }
    }
    return vowelsCount
}