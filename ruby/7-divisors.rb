# Link to Codewars Kata: https://www.codewars.com/kata/544aed4c4a30184e960010f4/
# Kata Level: 7kyu

def divisors(n)
    result = (2..n/2).select{|x| n % x == 0}
    result.length != 0 ? result : "#{n} is prime"
end