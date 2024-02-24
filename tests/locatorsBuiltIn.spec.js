/*
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

const { test, expect } = require('@playwright/test');

test('Locators built in', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  await page.waitForSelector("[alt='Second slide']");
  const oneOfImages = await page.getByAltText('Second slide');
  await expect(oneOfImages).toBeVisible();

  const text = await page.getByText('Get in Touch');
  await expect(text).toBeVisible();
});
