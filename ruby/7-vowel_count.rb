# Link to Codewars KAta: https://www.codewars.com/kata/vowel-count/
# Kata Level: 7kyu

def getCount(inputStr)
    inputStr.scan(/[aeoui]/).count
end