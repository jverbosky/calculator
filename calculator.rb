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
    when "-" then result = num_1 - num_2
    when "*" then result = num_1 * num_2
    when "/" then num_2 == 0 ? result = "Error" : result = num_1.to_f / num_2
  end
  # logic to round "unexpected" decimal output from floats (to 12 places)
  result = (result*1_000_000_000_000.0).round/1_000_000_000_000.0 if result != "Error"
  return result
end

# Method to return integer if value after decimal is zero
def evaluate_result(num)
  if num == 0
    return 0
  else
    num % num.to_i == 0 ? num.to_i : num
  end
end

# Method to compute result of all mathmatical expressions (multiple supported)
def get_result(string)
  numbers = get_numbers(string)
  operators = get_operators(string)
  return "Error" if numbers.count == operators.count  # throw error if expression ends in operator
  number_index = 0
  operator_index = 0
  num_1 = evaluate_number(numbers[number_index])  # start with first number in numbers array
  result = 0
  if operators.length == 0  # if there aren't any operators, return the single number
    result = num_1
  else  # otherwise, start calculating...
    while number_index < operators.length  # calculate pairs of numbers (left to right) until done
      operator = operators[operator_index]  # start with first operator in operators array
      num_2 = evaluate_number(numbers[number_index + 1])  # start with second number in numbers array
      result = calculate(num_1, operator, num_2)  # perform calculation
      break if result == "Error"  # if expression divides by zero anywhere, return "Error"
      num_1 = result  # store result in num_1 and use it for next iteration (or return when loop ends)
      number_index += 1  # increase counter to grab next number for next iteration
      operator_index += 1  # increase counter to grab next operator for next iteration
    end
  end
  result = evaluate_result(result)  # check if number is an integer
  return result
end