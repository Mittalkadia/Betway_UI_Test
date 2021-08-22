package org.example.PageObjectPages;

import org.example.BaseTest.Utils;
import org.openqa.selenium.By;

public class FootBall_Match_Page extends Utils {
    private By _numberOfTeams = By.xpath("//span[contains(@class,'gs-u-display-none gs-u-display-block@m')]");

    public void today_FootBAll_Match_Name_List() {
        //finding total number of team
        int totalTeams = driver.findElements(_numberOfTeams).size();

        if (totalTeams >= 1)//this condition for total number of team greater than 1 than go inside
        { //print total number of team
            System.out.println("Total number of teams are playing today is = " + totalTeams);

            for (int number = 1; number < totalTeams; number++)//for loop for number of team
            {
                if (number % 2 != 0)//if this condition  true than do inside
                {  //save variable in homeTeam
                    String homeTeam = driver.findElement(By.xpath("(//span[contains(@class,'gs-u-display-none gs-u-display-block@m')])[" + number + "]")).getText();
                    //variable second team
                    int vsTeam = number + 1;
                    //save variable in away team
                    String awayTeam = driver.findElement(By.xpath("(//span[contains(@class,'gs-u-display-none gs-u-display-block@m')])[" + vsTeam + "]")).getText();
                    //print output
                    System.out.println(homeTeam + " Vs " + awayTeam);
                }
            }
        } else {
            //print output
            System.out.println("There is no match today");
        }
    }
}
