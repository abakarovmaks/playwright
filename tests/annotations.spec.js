const { test, expect } = require('@playwright/test');

// Run only this test
// test.only('annotations 1', async ({ page }) => {
//   console.log('Test 1');
// });

// Skip test
// test.skip('annotations 2', async ({ page }) => {
//   console.log('Test 2');
// });

// Browser
// test('annotations 3', async ({ page, browserName }) => {
//   if (browserName === 'firefox') {
//     test.skip();
//   }
//   console.log('Test 3');
// });

// Fail the test
test('annotations 2', async ({ page }) => {
  test.fail();
  console.log('Test 4');
  expect(1).toBe(1);
});
