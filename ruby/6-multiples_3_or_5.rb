# Link to Codewars Kata: https://www.codewars.com/kata/multiples-of-3-or-5/
# Kata Level: 6kyu

def solution(number)
    (2...number).select{|n| n % 3 == 0 || n % 5 == 0}.sum
end