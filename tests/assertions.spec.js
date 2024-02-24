/*
1) expect(page).toHaveURL()   Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
*/

const { test, expect } = require('@playwright/test');

test('assertions', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  await expect(page).toHaveTitle('nopCommerce demo store. Register');
  await expect(page.locator('.header-logo')).toBeVisible();

  const date = await page.locator("[name='DateOfBirthDay'] option");
  await expect(date).toHaveCount(32);
});
