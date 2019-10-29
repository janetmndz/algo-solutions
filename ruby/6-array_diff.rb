# Link to Codewars Kata: https://www.codewars.com/kata/array-dot-diff/
# Kata Level: 6kyu

def array_diff(a, b)
    a.reject{|x| b.include?(x)}
end