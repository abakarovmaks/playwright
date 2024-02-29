const { test, expect } = require('@playwright/test');

test('multi select', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //   await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

  //   const colors = page.locator('#colors option');
  //   expect(colors).toHaveCount(5);

  //   const colors = await page.$$('#colors option');
  //   expect(colors.length).toBe(5);

  const content = await page.locator('#colors').textContent();
  expect(content.includes('Blue')).toBeTruthy();

  await page.waitForTimeout(2000);
});
