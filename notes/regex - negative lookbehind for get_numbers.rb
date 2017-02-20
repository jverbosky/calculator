# ["12", "13.5", "7", "-4", "78.6", "-12.35", "86", "5.3)", "0"] - not handling positives with parentheses
# string = "12+13.5-7*(-4)/78.6-(-12.35)+86-5.3-0"
string = "(-12)+(-13.5)-(-7)*(-4)/(-78.6)-(-12.35)+(-86.5)"  # completely negative string

# def get_numbers(string)
#   string.scan(/\d+\.?\d*/)
# end

# test_array_split = numbers.split(/(\d+\.?\d*)/)
# numbers_array = numbers.scan(/\d+\.?\d*/)  # no negatives
# numbers_array = numbers.scan(/((\(-)?\d+(\.\d+)?\)?)/)  # negatives

# operators_array = string.scan(/(((?<!\()-)|((?!\))[+*\/]))/)

def get_operators(string)
  groups = string.scan(/(((?<!\()-)|((?!\))[+*\/]))/)
  operators = []
  groups.each { |group| operators.push(group[0]) }
  return operators
end

# p temp
# p operators_array
p get_operators(string)

# ((?<!\()-)  # matches minus sign not in parentheses (but only the minus sign)
# ((?!\))\+)  # matches plus sign without grabbing preceding parentheses
# ((?!\))[+*\/])  # matches plus, multiply & divide without grabbing parentheses


# def get_numbers(string)
#   groups = string.scan(/((\(-)?\d+(\.\d+)?\)?)/)
#   numbers = []
#   groups.each { |group| numbers.push(group[0]) }
#   numbers.map! { |n| n[0] == "(" ? n = n[1..-2] : n }
#   # return numbers
# end

# p get_numbers(string)
# /((\(-)?\d+(\.\d+)?\)?)/
# ((\(-)?\d+(\.\d+)?\)?)  # rubular test version
# (\(-)?\d+(\.\d+)?\)?  # rubular test version - no match groups
# asterisk = 0 or more, plus = 1 or more