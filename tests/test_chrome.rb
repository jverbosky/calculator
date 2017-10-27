# require 'selenium-webdriver'
# require 'test/unit'
# # require_relative '../methods.rb'

# load '../local_env.rb' if File.exist?('../local_env.rb')


# class ThrivyTestCase < Test::Unit::TestCase

#   def setup
#     caps = Selenium::WebDriver::Remote::Capabilities.chrome(chromeOptions: { args: [ "--headless" ]})  
#     @driver = Selenium::WebDriver.for:chrome, desired_capabilities:caps
#     target_size = Selenium::WebDriver::Dimension.new(768, 894)
#     @driver.manage.window.size = target_size
#     @driver.navigate.to("https://calculator-jv.herokuapp.com/")
#     @wait = Selenium::WebDriver::Wait.new(:timeout => 15)
#   end

#   def teardown
#     @driver.close
#   end

#   def test_webpage
#     @driver.navigate.to "https://calculator-jv.herokuapp.com/"
#     title_link = @driver.find_element(:xpath, "/html/body/header/h1/a").displayed?
#     assert_equal(title_link, true, "title link isn't displaying")
#   end

# end