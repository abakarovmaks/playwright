const { test, expect } = require('@playwright/test');

test('bootstrap dropdown', async ({ page }) => {
  await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

  //   await page.getByTestId('dropdown').click();
  await page.locator('.btn-group').click();

  //   const options = await page.locator('ul>li input');
  //     expect(options).toHaveCount(11);

  //   const options = await page.$$('ul>li input');
  //   expect(options.length).toBe(11);

  const options = await page.$$('ul>li label');
  for (const opt of options) {
    const value = await opt.textContent();
    if (value.includes('Oracle')) {
      await opt.click();
    }
  }

  await page.waitForTimeout(2000);
});
