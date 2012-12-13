require 'selenium-webdriver'
require 'ruby-debug'

$LOAD_PATH << File.expand_path('../lib', __FILE__)

Before do
  @driver = Selenium::WebDriver.for :chrome
  @driver.navigate.to "https://rally1.rallydev.com"
  @wait = Selenium::WebDriver::Wait.new(:timeout => 10, :interval => 0.5)
end

After do
  @driver.quit
end
