package org.example.PageObjectPages;

import org.example.BaseTest.Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class Search_Sports_Articles_Page extends Utils {

    private By _searchBox = By.id("orb-search-q");
    private By _articles = By.xpath("(//a[@class='ssrcss-aoujgm-PromoLink e1f5wbog0'])");

    public void search_sportArticles() {
        //enter text in search bar
        enterText(_searchBox, "Sports articles" + Keys.ENTER);
        //find out total articles size
        int totalArticlesOnPage = driver.findElements(_articles).size();

        if (totalArticlesOnPage >= 1) //this condition if articles greater than 1 than go inside
        {
            //print out first articles header
            System.out.println("First article header as below \n" + driver.findElement(By.xpath("(//a[@class='ssrcss-aoujgm-PromoLink e1f5wbog0'])[1]")).getText());
            //print last articles header
            System.out.println("Last article header as Below \n" + driver.findElement(By.xpath("(//a[@class='ssrcss-aoujgm-PromoLink e1f5wbog0'])[" + totalArticlesOnPage + "]")).getText());
        } else {
            //print if there is no articles
            System.out.println("There is no articles for sports");
        }
    }
}
