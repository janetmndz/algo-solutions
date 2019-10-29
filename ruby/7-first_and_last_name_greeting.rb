# Link to Codewars Kata: https://www.codewars.com/kata/greetings-with-first-name-and-last-name/
# Kata Level: 7kyu

class Person
    def initialize(first, last)
        @first = first
        @last = last
    end

    def greet
        "Hello, #{@first} #{@last}!"
    end
end