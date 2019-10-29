# Link to Codewars Kata: https://www.codewars.com/kata/character-counter/
# Kata Level: 7kyu

def validate_word(word)
    word_split = word.downcase.split("")
    count = word_split.count word_split[0]
    
    word_split.all? { |letter|
        (word_split.count letter) === count 
    }
end