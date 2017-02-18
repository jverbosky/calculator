def calculate(num_1, operator, num_2)
  result = 0
  case operator
    when "+" then result = num_1 + num_2
    when "-" then result = num_1 - num_2  # TO-DO: subtracting floats a bit unexpected, add logic later
    when "*" then result = num_1 * num_2
    when "/" then num_2 == 0 ? result = "Error" : result = num_1.to_f / num_2
  end
  return result
end

def parse_operator(input)
  operator = input[-1]
end

def parse_number(input)
  (input.chars.include? ".") ? input.to_f : input.to_i
end

def get_result(input, num_2)
  num_1 = parse_number(input)
  operator = parse_operator(input)
  num_2 = parse_number(num_2)
  result = calculate(num_1, operator, num_2)
end

# Sandbox testing
# puts parse_number("123.456+")
# puts parse_number("0-")

# puts get_result("123+", "456")
# puts get_result("123-", "456")
# puts get_result("3*", "456")
# puts get_result("123/", "4")
# puts get_result("123/", "0")
# puts get_result("123.456+", "456.789")
# puts get_result("123.456-", "456.789")
# puts get_result("1.23*", "456.78")
# puts get_result("1.23/", "4.56")
# puts get_result("1.23/", "0")
# p parse_operator("123+")  # "+"
# p parse_number("123+")
# puts add(3, 4)
# puts subtract(3, 8)
# puts multiply(3, 5)
# puts multiply(5, 0)
# puts divide(4, 2)
# puts divide(4, 0)
