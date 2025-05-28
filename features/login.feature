Feature: Login API
	@login
  Scenario: Successful login with valid credentials
    Given I have valid login credentials
    When I send a POST request to the login endpoint
    Then I should receive a 200 status code
    And the response should contain a token
