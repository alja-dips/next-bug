import { test, expect } from '@playwright/test';

for(let i = 0; i < 300; i++) {
  test('Form submit should redirect '+i, async ({ page }) => {
    await page.goto('/form');
    await page.fill('input[placeholder="Name"]', 'My Name');
    await page.fill('input[placeholder="Message"]', 'My Message');
    await page.click("button[type='submit']");
    await expect(page).toHaveURL('/');
  });
}
