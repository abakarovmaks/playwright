const { test, expect } = require('@playwright/test');

test('drag and drop', async ({ page }) => {
  await page.goto(
    'http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html'
  );

  const madrid = await page.locator('#box7');
  const spain = await page.locator('#box107');

  // Approach 1

  // await madrid.hover();
  // await page.mouse.down();

  // await spain.hover();
  // await page.mouse.up();

  // Approach 2
  await madrid.dragTo(spain);

  await page.waitForTimeout(3000);
});
