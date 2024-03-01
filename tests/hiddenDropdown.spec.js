const { test, expect } = require('@playwright/test');

test('hidden dropdown', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.locator("[name='username']").fill('Admin');
  await page.locator("[name='password']").fill('admin123');
  await page.locator("[type='submit']").click();

  await page
    .locator(
      '#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(2) > a > span'
    )
    .click();

  await page
    .locator(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i'
    )
    .click();

  const options = await page.$$("//div[@role='listbox']//span");
  for (const option of options) {
    const jobTitle = await option.textContent();
    if (jobTitle.includes('QA Engineer')) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(3000);
});
