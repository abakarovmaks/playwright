const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.locator('#login2').click();
  await page.fill('#loginusername', 'pavanol');
  await page.fill('#loginpassword', 'test@123');
  await page.locator('button').getByText('Log in').click();

  const logOut = await page.locator('#logout2');
  await expect(logOut).toBeVisible();

  await page.close();
});
