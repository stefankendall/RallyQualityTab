Feature: Hidden tabs

  Scenario: Quality tab
    When I login as user "toolbot@rallydev.com" with password "abc123!!"
    Then There is no "Quality" tab
