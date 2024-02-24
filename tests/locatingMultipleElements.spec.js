const { test, expect } = require('@playwright/test');

test('Locating multiple elements.spec', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // const allLinks = await page.$$('a');
  // for (const link of allLinks) {
  //   const linkText = await link.textContent();
  //   console.log(linkText);
  // }
  await page.waitForSelector('#tbodyid div div div a');
  const allProducts = await page.$$('#tbodyid div div div a');
  for (const product of allProducts) {
    const productText = await product.textContent();
    console.log(productText);
  }
});
