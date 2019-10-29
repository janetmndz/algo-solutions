# Link to Codewars Kata: https://www.codewars.com/kata/valid-phone-number/
# Kata Level: 6kyu

def validPhoneNumber(phoneNumber)
    !!(phoneNumber =~ /^\(\d{1,3}\)\s\d{1,3}\-\d{1,4}$/ )
end