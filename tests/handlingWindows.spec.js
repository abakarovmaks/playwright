const { test, expect, chromium } = require('@playwright/test');

test('handling windows/pages', async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allPages = context.pages();
  console.log('Number of pages', allPages.length);

  await page1.goto('https://studymoose.com/free-plagiarism-checker');
  await expect(page1).toHaveTitle(
    'Free Plagiarism Checker No Word Limit - Studymoose'
  );

  await page2.goto('https://studymoose.com/');
  await expect(page2).toHaveTitle(
    'Free Essay Samples, Examples & Research Papers for College Students - StudyMoose'
  );
});
test('handling multiple windows/pages', async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  await page1.goto('https://test.com');
  await expect(page1).toHaveTitle(
    'Free Plagiarism Checker No Word Limit - Studymoose'
  );

  const pagePromise = context.waitForEvent('page');
  await page1.locator('#button').click();

  const newPage = await pagePromise();
  await expect(newPage).toHaveTitle('TEST');

  await browser.close();
});
