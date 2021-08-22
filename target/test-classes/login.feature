@Regression
@Login
Feature: Login Functionality
  Background:
    Given User is on homepage

  Scenario Outline: User should not Login with a invalid credential
    When User click on login
    And User type "<email>" and "<password>"
    And User click on Sign in button
    Then User should not able to login
    And  User should get "<error_message>"

    Examples:
      | email                | password      | error_message                                                               |
      | meerapatel@gmail.com |               | Something's missing. Please check and try again.                            |
      |                      | meerapatel123 | Something's missing. Please check and try again.                            |
      | 1111@gmail.com       | abc1111       | Uh oh, that password doesn’t match that account. Please try again.          |
      |                      |               | Something's missing. Please check and try again.                            |
      | meerapatel@gmail.com | abc1111       | Uh oh, that password doesn’t match that account. Please try again.          |
      | 1111@gmail.com       | meerapatel123 | Uh oh, that password doesn’t match that account. Please try again.          |
      | $#$#$                | meerapatel123 | Uh oh, that password doesn’t match that account. Please try again.          |
      | $#$#$                |               | Something's missing. Please check and try again                             |
      |                      | meera         | Sorry, that password is too short. It needs to be eight characters or more. |