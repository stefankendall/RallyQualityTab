require 'selenium-webdriver'

$LOAD_PATH << File.expand_path('../lib', __FILE__)

Before do
  @driver = Selenium::WebDriver.for :chrome, :switches => %w[--load-extension=./]
  @driver.navigate.to "https://rally1.rallydev.com"
  @wait = Selenium::WebDriver::Wait.new(:timeout => 10, :interval => 0.5)
end

After do
  @driver.quit
end
