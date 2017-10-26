require 'selenium-webdriver'
require 'test/unit'

load '../local_env.rb' if File.exist?('../local_env.rb')

class ThrivyTestCase < Test::Unit::TestCase

  def setup
    # works non-headless
    # caps = Selenium::WebDriver::Firefox::Options.new(args: ['-headless'])
    # @driver = Selenium::WebDriver.for :firefox #, options: caps

    caps = Selenium::WebDriver::Firefox::Options.new(args: ['-headless'])
    @driver = Selenium::WebDriver.for :firefox, options: caps

    # caps = Selenium::WebDriver::Firefox::Options.new(args: ['-headless'])
    # @driver = Selenium::WebDriver.for:firefox, options: caps

    target_size = Selenium::WebDriver::Dimension.new(768, 894)
    @driver.manage.window.size = target_size
    # @driver.navigate.to("https://calculator-jv.herokuapp.com/")
    @driver.navigate.to("https://www.google.com/")
    @wait = Selenium::WebDriver::Wait.new(:timeout => 15)
  end  

  def teardown
    @driver.close
  end

  def test_webpage
    # @driver.navigate.to "https://calculator-jv.herokuapp.com/"
    @driver.navigate.to "https://www.google.com/"
    title_link = @driver.find_element(:xpath, '//*[@id="hplogo"]').displayed?
    assert_equal(title_link, true, "title link isn't displaying")
  end

end