package org.example.BaseTest;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class Browser_Selector extends Utils {

    public void open_Browser() {
        //setting up chrome driver from WebDriver manager
        WebDriverManager.chromedriver().setup();
        //create object for chrome driver
        driver = new ChromeDriver();
        //maximize the browser window
        driver.manage().window().maximize();
        //Apply implicitlyWait to driver object
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }
}
