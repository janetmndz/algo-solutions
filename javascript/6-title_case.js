// Link to Codewars Kata: https://www.codewars.com/kata/title-case/
// Kata Level: 6kyu

function titleCase(title, minorWords) {
    let convertString = title.toLowerCase().split(' ')
    let exemptWords = minorWords != undefined ? minorWords.toLowerCase().split(' ') : ''

    if (exemptWords.length > 0){
        for (i = 0; i < convertString.length; i++){
        if(!(exemptWords.indexOf(convertString[i]) > -1) || i == 0){
        convertString[i] = convertString[i].charAt(0).toUpperCase() + convertString[i].slice(1)
        }
    }
        return convertString.join(' ')
    }
    else{
        for (i = 0; i < convertString.length; i++){
            convertString[i] = convertString[i].charAt(0).toUpperCase() + convertString[i].slice(1)
        }
        return convertString.join(' ')
    }
}