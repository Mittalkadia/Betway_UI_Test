package org.example.PageObjectPages;

import org.example.BaseTest.Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Login_Page extends Utils {

    private By _userName = By.cssSelector("input#user-identifier-input");
    private By _password = By.cssSelector("input#password-input");
    private By _singIn_Button = By.cssSelector("button#submit-button");
    private By _actual_ErrorMessage = By.cssSelector("form");

    public void enter_Email_And_Password(String email, String password) {
        //type email
        enterText(_userName, email);
        //type password
        enterText(_password, password);
    }

    public void click_On_SignIn_Button() {
        //click on sign in button
        clickOnElement(_singIn_Button);
    }

    public void error_Message_Assert(String error_message) {
        //save actual error message in error message variable
        WebElement Error_Message = driver.findElement(_actual_ErrorMessage);
        //get text from actual error message
        String Actual_Error_Message = Error_Message.getText();
        //compare error message is same as actual error message
        if (error_message.equals(Actual_Error_Message)) {
            //print output
            System.out.println("Actual And Expected Message are same and it is : " + Actual_Error_Message);
        } else {
            //print actual error message
            System.out.println("Actual is :" + Actual_Error_Message);
            //print expected error message
            System.out.println("Expected is :" + error_message);
        }

    }
}
