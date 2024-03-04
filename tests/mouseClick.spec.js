const { test, expect } = require('@playwright/test');

test('mouse click', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

  const button = await page.locator('#button');
  await button.click({ button: 'right' });
});
