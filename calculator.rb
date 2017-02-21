# Method returns array of numbers from string
def get_numbers(string)
  groups = string.scan(/((\(-)?\d+(\.\d+)?\)?)/)  # regex capture groups to handle parentheses-enclosed negatives (-5.5)
  numbers = []
  groups.each { |group| numbers.push(group[0]) }  # parse inner arrays for first element in each capture group
  numbers.map! { |n| n[0] == "(" ? n = n[1..-2] : n }  # strip parentheses from negative numbers
end

# Method to obtain all operators from string
def get_operators(string)
  groups = string.scan(/(((?<!\()-)|((?!\))[+*\/]))/)  # regex capture groups to ignore negative number sign
  operators = []
  groups.each { |group| operators.push(group[0]) }  # parse inner arrays for first element in each capture group
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
    when "-" then result = num_1 - num_2  # TO-DO: subtracting floats a bit unexpected, research more later
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
  num_1 = evaluate_number(numbers[number_index])  # start with the first number in the numbers array
  result = 0
  while number_index < operators.length  # calculate pairs of numbers (left to right) until done
    operator = operators[operator_index]  # start with the first operator in the operators array
    num_2 = evaluate_number(numbers[number_index + 1])  # start with the second number in the numbers array
    result = calculate(num_1, operator, num_2)  # perform the calculation
    num_1 = result  # store the result in num_1 and use it for the next iteration (or return when loop ends)
    number_index += 1  # increase the counter to grab the next number for the next iteration
    operator_index += 1  # increase the counter to grab the next operator for the next iteration
  end
  return result
end

# Sandbox testing
# puts get_result("2*3+1")  # 7
# puts get_result("123+456")  # 579
# puts get_result("123-456")  # -333
# puts get_result("3*456")  # 1368
# puts get_result("123*0")  # 0
# puts get_result("123/4")  # 30.75
# puts get_result("123.456+456.789")  # 580.245
# puts get_result("123.456-456.789")  # -333.33299999999997
# puts get_result("1.23*456.78")  # 561.8394
# puts get_result("1.23/4.56")  # 0.26973684210526316
# puts get_result("123/0")  # Error
# puts get_result("1.23/0")  # Error
# puts get_result("12+13.5-7*(-4)/78.6-(-12.35)+86-5.3-0")  # 92.10852417302799
# puts get_result("(-12)+(-13.5)-(-7)*(-4)/(-78.6)-(-12.35)+(-86.5)")  # -75.09147582697202