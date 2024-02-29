const { test, expect } = require('@playwright/test');

test('auto suggest dropdown', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  await page.locator('#src').fill('Ky');
  await page.waitForSelector('.sc-dnqmqq.eFEVtU li');

  const cityOptions = await page.$$('.sc-dnqmqq.eFEVtU li');
  for (const city of cityOptions) {
    const textCity = await city.textContent();
    if (textCity.includes('KIM')) {
      await city.click();
      break;
    }
  }

  await page.waitForTimeout(2000);
});
