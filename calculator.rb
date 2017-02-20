# Method to parse multiple numbers (integer and float) and operators from string
def parse_string(string)
  array = string.gsub(" ", "").split(/(\d+\.?\d*)/).reject(&:empty?)
end

# Method returns array of numbers from parse_string() output - works with negatives now (-5.5)
def get_numbers(string)
  groups = string.scan(/((\(-)?\d+(\.\d+)?\)?)/)
  numbers = []
  groups.each { |group| numbers.push(group[0]) }
  numbers.map! { |n| n[0] == "(" ? n = n[1..-2] : n }
end

# Method to obtain all operators from parse_string() output
def get_operators(string)
  array = parse_string(string)
  operators = []
  array.each { |char| operators.push(char) if char !~ /(\d+(\.\d+)?)/ }
  return operators
end

# Method to convert a numeric string into an integer or float
def evaluate_number(numeric_string)
  (numeric_string.include? ".") ? numeric_string.to_f : numeric_string.to_i
end

# Method to perform appropriate calculation using provided numbers and operator
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

# Method to compute the result of all mathmatical expressions (multiple supported)
def get_result(string)
  numbers = get_numbers(string)
  number_index = 0
  operators = get_operators(string)
  operator_index = 0
  num_1 = evaluate_number(numbers[number_index])
  result = 0
  while number_index < operators.length
    operator = operators[operator_index]
    num_2 = evaluate_number(numbers[number_index + 1])
    result = calculate(num_1, operator, num_2)
    number_index += 1
    operator_index += 1
    num_1 = result
  end
  result = "Error" if string.include? ".."
  return result
end

# Sandbox testing
# puts get_result("2*3+1")
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