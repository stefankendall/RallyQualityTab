Feature: Hidden tabs

  Scenario: Quality tab
    When I login as user "DUMMYUSER" with password "DUMMYPASSWORD"
    Then There is no "Quality" tab
