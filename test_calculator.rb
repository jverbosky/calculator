require "minitest/autorun"
require_relative "calculator.rb"

class TestCalculator < Minitest::Test

  def test_1_output_raw_number_from_string_no_operator
    input = "123"
    results = parse_number(input)
    assert_equal(123, results)
  end

  def test_2_output_raw_number_float_from_string_no_operator
    input = "123.456"
    results = parse_number(input)
    assert_equal(123.456, results)
  end

  def test_3_output_raw_number_from_string_with_operator
    input = "123+"
    results = parse_number(input)
    assert_equal(123, results)
  end

  def test_4_output_raw_number_float_from_string_with_operator
    input = "123.456*"
    results = parse_number(input)
    assert_equal(123.456, results)
  end

  def test_5_output_operator
    input = "123-"
    results = parse_operator(input)
    assert_equal("-", results)
  end

  def test_6_output_operator_float
    input = "123.456/"
    results = parse_operator(input)
    assert_equal("/", results)
  end

  def test_7_calculate_add
    num_1 = 123
    operator = "+"
    num_2 = 456
    results = calculate(num_1, operator, num_2)
    assert_equal(579, results)
  end

  def test_8_calculate_add_floats
    num_1 = 123.456
    operator = "+"
    num_2 = 456.789
    results = calculate(num_1, operator, num_2)
    assert_equal(580.245, results)
  end

  def test_9_calculate_subtract
    num_1 = 456
    operator = "-"
    num_2 = 123
    results = calculate(num_1, operator, num_2)
    assert_equal(333, results)
  end

  def test_10_calculate_subtract_floats
    num_1 = 456.789
    operator = "-"
    num_2 = 123.456
    results = calculate(num_1, operator, num_2)
    assert_equal(333.33299999999997, results)
  end

  def test_11_calculate_multiply
    num_1 = 123
    operator = "*"
    num_2 = 456
    results = calculate(num_1, operator, num_2)
    assert_equal(56088, results)
  end

  def test_12_calculate_multiply_floats
    num_1 = 123.456
    operator = "*"
    num_2 = 456.789
    results = calculate(num_1, operator, num_2)
    assert_equal(56393.342784, results)
  end

  def test_13_calculate_divide
    num_1 = 123
    operator = "/"
    num_2 = 4
    results = calculate(num_1, operator, num_2)
    assert_equal(30.75, results)
  end

  def test_14_calculate_divide_floats
    num_1 = 12.3
    operator = "/"
    num_2 = 4
    results = calculate(num_1, operator, num_2)
    assert_equal(3.075, results)
  end

  def test_15_calculate_divide_by_zero
    num_1 = 123
    operator = "/"
    num_2 = 0
    results = calculate(num_1, operator, num_2)
    assert_equal("Error", results)
  end

  def test_16_calculate_divide_by_zero_floats
    num_1 = 12.3
    operator = "/"
    num_2 = 0
    results = calculate(num_1, operator, num_2)
    assert_equal("Error", results)
  end

  def test_17_parse_input_and_get_result_add
    input = "123+"
    num_2 = "456"
    results = get_result(input, num_2)
    assert_equal(579, results)
  end

  def test_18_parse_input_and_get_result_add_floats
    input = "123.456+"
    num_2 = "456.789"
    results = get_result(input, num_2)
    assert_equal(580.245, results)
  end

  def test_19_parse_input_and_get_result_subtract
    input = "456-"
    num_2 = "123"
    results = get_result(input, num_2)
    assert_equal(333, results)
  end

  def test_20_parse_input_and_get_result_subtract_floats
    input = "456.789-"
    num_2 = "123.456"
    results = get_result(input, num_2)
    assert_equal(333.33299999999997, results)
  end

  def test_21_parse_input_and_get_result_multiply
    input = "123*"
    num_2 = "456"
    results = get_result(input, num_2)
    assert_equal(56088, results)
  end

  def test_22_parse_input_and_get_result_multiply_floats
    input = "123.456*"
    num_2 = "456.789"
    results = get_result(input, num_2)
    assert_equal(56393.342784, results)
  end

  def test_23_parse_input_and_get_result_divide
    input = "123/"
    num_2 = "4"
    results = get_result(input, num_2)
    assert_equal(30.75, results)
  end

  def test_24_parse_input_and_get_result_divide_floats
    input = "12.3/"
    num_2 = "4"
    results = get_result(input, num_2)
    assert_equal(3.075, results)
  end

  def test_25_parse_input_and_get_result_divide_by_zero
    input = "123/"
    num_2 = "0"
    results = get_result(input, num_2)
    assert_equal("Error", results)
  end

  def test_26_parse_input_and_get_result_divide_by_zero_floats
    input = "12.3/"
    num_2 = "0"
    results = get_result(input, num_2)
    assert_equal("Error", results)
  end

end