@Regression
@searchSportArticles
Feature: As a sports user, I would like to read about all articles related to sports
  Scenario: Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page.
    Given User on the BBC sport page
    When  User click on the search box
    And   User type "sports articles" in search box
    Then  User able to see list of sports articles