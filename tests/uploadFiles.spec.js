const { test, expect } = require('@playwright/test');

test('upload one file', async ({ page }) => {
  await page.goto('https://studymoose.com/free-plagiarism-checker');

  await page.waitForSelector('#dropzoneFileUploaderPl');
  await page
    .locator('#dropzoneFileUploaderPl')
    .setInputFiles(
      'tests/uploadFiles/AI_and_Climate_Change__How_they’re_connected,_and_what_we_can_do_about_it.pdf'
    );

  await page.waitForTimeout(3000);
});

test('upload many files', async ({ page }) => {
  await page.goto('https://studymoose.com/free-plagiarism-checker');

  await page.waitForSelector('#dropzoneFileUploaderPl');
  await page
    .locator('#dropzoneFileUploaderPl')
    .setInputFiles([
      './uploadFiles/AI_and_Climate_Change__How_they’re_connected,_and_what_we_can_do_about_it.pdf',
      './uploadFiles/Dorothy_Vaughan_Biography.pdf',
    ]);

  await page.waitForTimeout(3000);
});
