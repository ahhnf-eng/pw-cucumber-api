Feature: Login API
	@login
  Scenario: Successful login with valid credentials
    Given I have "validUser" account
    When I send a login request
    # Then the response status should be 200
    # And the response should contain a token