package org.example.BaseTest;

import org.openqa.selenium.By;

public class HomePage extends Utils {
    private By _signIn = By.cssSelector("a#idcta-link");

    public void click_On_SignIn() {
        //click sign in
        clickOnElement(_signIn);


    }

}

