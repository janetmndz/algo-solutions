# Link to Codewars Kata: https://www.codewars.com/kata/simple-pig-latin/
# Kata Level: 5kyu

def pig_it text
    text.split(" ").map{ |w|
        if !!(w =~ /[[:alpha:]]/)
            ws = w.split("",2)
            ws[1] + ws[0] + "ay"
        else
            w
        end
    }.join(" ")
end