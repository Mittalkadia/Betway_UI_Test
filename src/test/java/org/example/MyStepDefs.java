package org.example;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.BaseTest.HomePage;
import org.example.PageObjectPages.FootBall_Match_Page;
import org.example.PageObjectPages.Login_Page;
import org.example.PageObjectPages.Search_Sports_Articles_Page;

public class MyStepDefs {
    HomePage homePage = new HomePage();
    Login_Page login_page = new Login_Page();
    FootBall_Match_Page footBall_match_page = new FootBall_Match_Page();
    Search_Sports_Articles_Page search_sports_articles_page = new Search_Sports_Articles_Page();

    //**************************** LOGIN SCENARIO *********************

    @Given("^User is on homepage$")
    public void user_is_on_homepage() {
    }

    @When("^User click on login$")
    public void user_click_on_login() {
        homePage.click_On_SignIn();
    }

    @And("^User type \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_type_and(String email, String password) {
        login_page.enter_Email_And_Password(email, password);
    }

    @And("^User click on Sign in button$")
    public void userClickOnSignInButton() {
        login_page.click_On_SignIn_Button();
    }

    @Then("^User should not able to login$")
    public void user_should_not_able_to_login() {
    }

    @And("^User should get \"([^\"]*)\"$")
    public void user_should_get(String error_message) {
        login_page.error_Message_Assert(error_message);
    }
    //**********************  TODAY FOOTBALL MATCH LIST *************************

    @Given("^User on BBC sport page\\.$")
    public void userOnBBCSportPage() {
    }

    @When("^User on the football scores and fixtures page\\.$")
    public void userOnTheFootballScoresAndFixturesPage() {
    }

    @Then("^User will get record all team name which are playing today\\.$")
    public void userWillGetRecordAllTeamNameWhichArePlayingToday() {
        footBall_match_page.today_FootBAll_Match_Name_List();
    }

    // ********************** SEARCH SPORTS ARTICLES *************************

    @Given("^User on the BBC sport page$")
    public void userOnTheBBCSportPage() {
    }

    @When("^User click on the search box$")
    public void userClickOnTheSearchBox() {
    }

    @And("^User type \"([^\"]*)\" in search box$")
    public void userTypeInSearchBox(String arg0) {
    }

    @Then("^User able to see list of sports articles$")
    public void userAbleToSeeListOfSportsArticles() {
        search_sports_articles_page.search_sportArticles();
    }

}