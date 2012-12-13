When /^I login as user "(.*?)" with password "(.*?)"$/ do |user, password|
  @driver.find_element(:name => 'j_username').send_keys user
  @driver.find_element(:name => 'j_password').send_keys password
  @driver.find_element(:id => 'login_button').click

  @driver.find_element(:tag_name => 'body').text().should include 'Welcome'

  @wait.until {
    @driver.find_elements(:tag_name => 'a').select { |a| a.text().include?('My Home') } != []
  }
end

Then /^There is no "(.*?)" tab$/ do |text|
  @driver.find_elements(:tag_name => 'a').select { |a| a.displayed? && a.text().include?(text) }.should be_empty
end
