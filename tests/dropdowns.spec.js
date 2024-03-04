const { test, expect } = require('@playwright/test');

test.describe('should first', () => {
  test('dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('#country').selectOption({ label: 'Canada' });
    // await page.locator('#country').selectOption('Canada'); // visible text
    // await page.locator('#country').selectOption({ value: 'uk' });
    // await page.locator('#country').selectOption({ index: 3 }); // index
    // await page.selectOption('#country', 'Canada');

    // const options = page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // const options = await page.$$('#country option');
    // await expect(options.length).toBe(10);
    // console.log(options.length);

    // const content = await page.locator('#country').textContent();
    // expect(content.includes('India')).toBeTruthy();

    const options = await page.$$('#country option');
    let status = false;
    for (const option of options) {
      let value = await option.textContent();
      if (value.includes('France')) {
        status = true;
        break;
      }
    }
    expect(status).toBeTruthy();

    await page.waitForTimeout(2000);
  });
});
