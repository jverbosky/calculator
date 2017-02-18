require "minitest/autorun"
require_relative "calculator.rb"

class TestCalculator < Minitest::Test

  def test_1_output_raw_number
    input = "123+"
    results = parse_number(input)
    assert_equal(123, results)
  end

  def test_2_output_raw_number_float
    input = "123.456*"
    results = parse_number(input)
    assert_equal(123.456, results)
  end

  def test_3_output_operator
    input = "123-"
    result = parse_operator(input)
    assert_equal("-", results)
  end

  def test_4_output_operator_float
    input = "123.456/"
    result = parse_operator(input)
    assert_equal("/", results)
  end

end