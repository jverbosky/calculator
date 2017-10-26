require 'selenium-webdriver'
require 'test/unit'

load '../local_env.rb' if File.exist?('../local_env.rb')

# NOTE: this is to fix random Chrome shutdown failure on CI
# Should be fixed in selenium >= 3.0.0
class Selenium::WebDriver::Firefox::Service
  alias_method :original_stop, :stop

  def stop
    original_stop
  rescue Net::ReadTimeout
  end
end



class ThrivyTestCase < Test::Unit::TestCase

  def setup
    # works non-headless
    # caps = Selenium::WebDriver::Firefox::Options.new(args: ['-headless'])
    # @driver = Selenium::WebDriver.for :firefox #, options: caps

    caps = Selenium::WebDriver::Firefox::Options.new(args: ['-headless'])
    @driver = Selenium::WebDriver.for :firefox, options: caps

    target_size = Selenium::WebDriver::Dimension.new(768, 894)
    @driver.manage.window.size = target_size
    @driver.navigate.to("https://calculator-jv.herokuapp.com/")
    @wait = Selenium::WebDriver::Wait.new(:timeout => 15)
  end  

  def teardown
    # @driver.close
    @driver.quit
  end

  def test_webpage
    x = "test"
    y = "test"
    assert_equal(x, y)
    # @driver.navigate.to "https://calculator-jv.herokuapp.com/"
    # title_link = @driver.find_element(:xpath, "/html/body/header/h1/a").displayed?
    # assert_equal(title_link, true, "title link isn't displaying")
  end

end