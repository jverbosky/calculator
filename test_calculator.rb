require "minitest/autorun"
require_relative "calculator.rb"

class TestCalculator < Minitest::Test

  def test_1_push_integers_from_expression_to_array
    input = "0+(-1)-2*(-3)/4"
    results = get_numbers(input)
    assert_equal(["0", "-1", "2", "-3", "4"], results)
  end

  def test_2_push_floats_from_expression_to_array
    input = "0.1+(-1.1)-2.2*(-3.3)/4.4"
    results = get_numbers(input)
    assert_equal(["0.1", "-1.1", "2.2", "-3.3", "4.4"], results)
  end

  def test_3_push_integers_and_floats_from_expression_to_array
    input = "0+(-1.1)-2*(-3.3)/4"
    results = get_numbers(input)
    assert_equal(["0", "-1.1", "2", "-3.3", "4"], results)
  end

  def test_4_push_operators_from_expression_to_array
    input = "0+(-1.1)-2*(-3.3)/4"
    results = get_operators(input)
    assert_equal(["+", "-", "*", "/"], results)
  end

  def test_5_convert_numeric_string_to_integer
    input = "0"
    results = evaluate_number(input)
    assert_equal(0, results)
  end

  def test_6_convert_numeric_string_to_float
    input = "0.123"
    results = evaluate_number(input)
    assert_equal(0.123, results)
  end

  def test_7_add_integers
    num_1 = 1
    operator = "+"
    num_2 = 2
    results = calculate(num_1, operator, num_2)
    assert_equal(3, results)
  end

  def test_8_add_floats
    num_1 = 1.1
    operator = "+"
    num_2 = 2.2
    results = calculate(num_1, operator, num_2)
    assert_equal(3.3, results)
  end

  def test_9_add_integer_and_float
    num_1 = 1
    operator = "+"
    num_2 = 2.2
    results = calculate(num_1, operator, num_2)
    assert_equal(3.2, results)
  end

  def test_10_subtract_integers
    num_1 = 1
    operator = "-"
    num_2 = 2
    results = calculate(num_1, operator, num_2)
    assert_equal(-1, results)
  end

  def test_11_subtract_floats
    num_1 = 1.1
    operator = "-"
    num_2 = 2.2
    results = calculate(num_1, operator, num_2)
    assert_equal(-1.1, results)
  end

  def test_12_subtract_integer_and_float
    num_1 = 1
    operator = "-"
    num_2 = 2.2
    results = calculate(num_1, operator, num_2)
    assert_equal(-1.2, results)
  end

  def test_13_multiply_integers
    num_1 = 2
    operator = "*"
    num_2 = 3
    results = calculate(num_1, operator, num_2)
    assert_equal(6, results)
  end

  def test_14_multiply_floats
    num_1 = 2.2
    operator = "*"
    num_2 = 3.3
    results = calculate(num_1, operator, num_2)
    assert_equal(7.26, results)
  end

  def test_15_multiply_integer_and_float
    num_1 = 2
    operator = "*"
    num_2 = 3.3
    results = calculate(num_1, operator, num_2)
    assert_equal(6.6, results)
  end

  def test_16_divide_integers
    num_1 = 4
    operator = "/"
    num_2 = 2
    results = calculate(num_1, operator, num_2)
    assert_equal(2, results)
  end

  def test_17_divide_floats
    num_1 = 4.3
    operator = "/"
    num_2 = 2.1
    results = calculate(num_1, operator, num_2)
    assert_equal(2.047619047619, results)
  end

  def test_18_divide_integer_and_float
    num_1 = 4.3
    operator = "/"
    num_2 = 2
    results = calculate(num_1, operator, num_2)
    assert_equal(2.15, results)
  end

  def test_19_divide_integer_by_zero
    num_1 = 4
    operator = "/"
    num_2 = 0
    results = calculate(num_1, operator, num_2)
    assert_equal("Error", results)
  end

  def test_20_divide_float_by_zero
    num_1 = 4.3
    operator = "/"
    num_2 = 0
    results = calculate(num_1, operator, num_2)
    assert_equal("Error", results)
  end

  def test_21_add_all_integers
    input = "0+(-1)+2+(-3)+4"
    results = get_result(input)
    assert_equal(2, results)
  end

  def test_22_add_all_floats
    input = "0.1+(-1.1)+2.2+(-3.3)+4.4"
    results = get_result(input)
    assert_equal(2.3, results)
  end

  def test_23_add_all_integers_and_floats
    input = "0+(-1.1)+2+(-3.3)+4"
    results = get_result(input)
    assert_equal(1.6, results)
  end

  def test_24_subtract_all_integers
    input = "0-(-1)-2-(-3)-4"
    results = get_result(input)
    assert_equal(-2, results)
  end

  def test_25_subtract_all_floats
    input = "0.1-(-1.1)-2.2-(-3.3)-4.4"
    results = get_result(input)
    assert_equal(-2.1, results)
  end

  def test_26_subtract_all_integers_and_floats
    input = "0-(-1.1)-2-(-3.3)-4"
    results = get_result(input)
    assert_equal(-1.6, results)
  end

  def test_27_multiply_all_integers
    input = "1*(-2)*3*(-4)*5"
    results = get_result(input)
    assert_equal(120, results)
  end

  def test_28_multiply_all_floats
    input = "0.1*(-1.1)*2.2*(-3.3)*4.4"
    results = get_result(input)
    assert_equal(3.51384, results)
  end

  def test_29_multiply_all_integers_and_floats
    input = "1*(-2.2)*3*(-4.4)*5"
    results = get_result(input)
    assert_equal(145.2, results)
  end

  def test_30_divide_all_integers_and_floats_by_zero
    input = "0*(-1.1)*2*(-3.3)*4"
    results = get_result(input)
    assert_equal(0, results)
  end

  def test_31_divide_all_integers
    input = "1/(-2)/3/(-4)/5"
    results = get_result(input)
    assert_equal(0.008333333333, results)
  end

  def test_32_divide_all_floats
    input = "0.1/(-1.1)/2.2/(-3.3)/4.4"
    results = get_result(input)
    assert_equal(0.002845889397, results)
  end

  def test_33_divide_all_integers_and_floats
    input = "1/(-2.2)/3/(-4.4)/5"
    results = get_result(input)
    assert_equal(0.006887052342, results)
  end

  def test_34_divide_all_integers_and_floats_by_zero
    input = "4/(-3.3)/2/(-1.1)/0"
    results = get_result(input)
    assert_equal("Error", results)
  end

  def test_35_calculate_for_all_integers
    input = "1+3-2*(-5)/4"
    results = get_result(input)
    assert_equal(-2.5, results)
  end

  def test_36_calculate_for_all_floats
    input = "1.1+3.3-2.2*(-5.5)/4.4"
    results = get_result(input)
    assert_equal(-2.75, results)
  end

  def test_37_calculate_for_all_integers_and_floats
    input = "1+3.3*2-(-5.5)/4"
    results = get_result(input)
    assert_equal(3.525, results)
  end

  def test_38_calculate_for_all_integers_and_floats_divide_by_zero
    input = "1+3.3/0*(-5.5)-4"
    results = get_result(input)
    assert_equal("Error", results)
  end

end