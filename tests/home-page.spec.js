const { test, expect } = require('@playwright/test');

test('Home page', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE');
  await page.close();
});
