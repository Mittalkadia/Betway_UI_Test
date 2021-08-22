package org.example;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.example.BaseTest.Browser_Selector;
import org.example.BaseTest.Utils;

public class Hooks extends Utils {
    //create object for browser selector object
    Browser_Selector browserSelector = new Browser_Selector();

    @Before
    public void OpenBrowser() {
        //open browser
        browserSelector.open_Browser();
        //open URL
        driver.get("https://www.bbc.co.uk/sport/football/scores-fixtures");
    }

    @After
    public void closeBrowser() {
        //close browser
         driver.quit();
    }
}
