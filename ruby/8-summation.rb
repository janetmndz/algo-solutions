# Link to Codewars Kata: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/
# Kata Level: 8kyu

def summation(num)
    i = 0
    sum = 0
    until i > num  do
        sum += i
        i +=1;
    end
    sum
end