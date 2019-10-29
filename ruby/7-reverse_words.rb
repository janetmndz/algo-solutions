# Link to Codewars Kata: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/
# Kata Level: 7kyu

def reverse_words(str)
    reversed = []
    str.split(/\s/).each do |word|
        reversed.push(word.reverse())
    end
    p reversed.join(" ")
end