const { test, expect } = require('@playwright/test');

test('drag and drop', async ({ page }) => {
  await page.goto('https://gotranscript.com/text-compare');

  const input1 = await page
    .locator("[name='text1']")
    .fill('welcome to Playwright');
  const input2 = await page.locator("[name='text2']");

  // CTRL + A
  await page.keyboard.press('Control+A');

  // CTRL + C
  await page.keyboard.press('Control+C');

  // TAB
  await page.keyboard.down('Tab');
  await page.keyboard.up('Tab');

  // CTRL + V
  await page.keyboard.press('Control+V');

  await page.waitForTimeout(3000);
});
