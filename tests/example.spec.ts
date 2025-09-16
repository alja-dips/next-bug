import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('Navigation tests', () => {
  test('Slow button should time out', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('slow-button').click();
    // sleep a few seconds to give the page time to navigate, since the "not" will cause this to resolve instantly
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await expect(page).not.toHaveURL('/verySlowTargetPage', {
      timeout: 2000
    });
  });

  test("Normal button should work", async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('normal-button').click();
    await expect(page).toHaveURL('/normalTargetPage', {
      timeout: 2000
    });
  });
});