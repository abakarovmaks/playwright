const { test, expect } = require('@playwright/test');

test('soft assertions', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // Hard
  //   await expect(page).toHaveTitle('STORE');
  //   await expect(page).toHaveURL('https://demoblaze.com/');
  //   await expect(page.locator('a#nava')).toBeVisible();

  // Soft
  await expect.soft(page).toHaveTitle('STORES');
  await expect.soft(page).toHaveURL('https://demoblaze.com/');
  await expect.soft(page.locator('a#nava')).toBeVisible();
});
