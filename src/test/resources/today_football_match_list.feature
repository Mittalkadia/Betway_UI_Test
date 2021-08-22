@Regression
@Team_Name_List
Feature: As a business user, I would like to make a record of all teams which are playing today
  Scenario: Output all team names with a match today. If there are no matches today, output a message to convey this.
    Given User on BBC sport page.
    When  User on the football scores and fixtures page.
    Then  User will get record all team name which are playing today.