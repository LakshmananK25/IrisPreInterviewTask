// @ts-check
const { test, expect } = require('@playwright/test');

test('Iris Test', async ({ page }) => {
  // create a post code box locator
    const searchbox = page.getByPlaceholder('Type a postcode here')
    // create a News Button locator
    const news = page.getByText('QA testing area')

    //Launching broswer and Opening the URL
    await page.goto('https://osa-web.t-cg.co.uk/');
    //Entering values in box
    await searchbox.fill('B16 8PE');
    await searchbox.press('Enter');
    //Scrolls and selects the Active Contact Group
    await page.getByRole('button', { name: 'go to homepage for Contact Group 5th Floor, Lyndon House 5862 Hagley Road, Birmingham, B16 8PE' }).click();
    //Selects the News title
    await page.getByTestId('NewsCurrentPageTitle').click();
    //Expect a text to contain "News" Heading
    await expect(page.getByRole('heading', { name: 'News', exact: true })).toBeVisible();
    //Saving screenshot
    await page.screenshot({path:'News.png'});
    //Navigating to QATest url
    await page.goto('https://osa-web.t-cg.co.uk/qatest');
    // Expects the URL to contain qatest.
    await expect(page).toHaveURL(/.*qatest/);
    // Expect a text "to contain"
    await expect(page.getByRole('heading', { name: 'News', exact: true })).toBeVisible();
    /*If we remove the comment line, the test gets passed for the current application behaviour
    //Expect a text is not "to contain"
    await expect(page.getByRole('heading', { name: 'News', exact: true })).not.toBeVisible();
    //Expects a error message
    await expect(news).toHaveText('QA testing area');*/
    //Saving screenshot
    await page.screenshot({path:'Iris QATest News.png'});


  });