# Link to Codewars Kata: https://www.codewars.com/kata/list-filtering/
# Kata Level: 7kyu

def filter_list(l)
    l.select { |num| num.is_a? Integer }
end