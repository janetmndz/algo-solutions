// Link to Codewars Kata: https://www.codewars.com/kata/valid-parentheses/
// Kata Level: 5kyu

function validParentheses(parens){
    let re = new RegExp(/\(\)/g)
    do{
        parens = parens.replace(re,'')
    }
    while( re.test(parens) )
    return (parens == 0) ? true : false
}