const { test, expect } = require('@playwright/test');

test('alert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });
  await page.click("button[onclick='myFunctionAlert()']");

  await page.waitForTimeout(3000);
});

test('Confirmation dialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();
    // await dialog.dismiss();
  });
  await page.click("button[onclick='myFunctionConfirm()']");
  await expect(page.locator('#demo')).toHaveText('You pressed OK!');

  await page.waitForTimeout(3000);
});

test.only('prompt', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('Maksym');
  });

  await page.click("button[onclick='myFunctionPrompt()']");
  await expect(page.locator('#demo')).toHaveText(
    'Hello Maksym! How are you today?'
  );

  await page.waitForTimeout(3000);
});
