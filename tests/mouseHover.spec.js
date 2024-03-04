const { test, expect } = require('@playwright/test');

test('hover', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

  const desktop = await page.locator('#narbar-menu > ul > li:nth-child(1) > a');
  const mac = await page.locator(
    '#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a'
  );

  await desktop.hover();
  await mac.hover();

  await page.waitForTimeout(3000);
});
