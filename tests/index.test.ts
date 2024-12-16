import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('displays welcome message and route links', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByText('Welcome!')).toBeVisible();
    await expect(page.getByText('Check out Recipes')).toBeVisible();
    await expect(page.getByText("Check out Quotes")).toBeVisible();
  });
})

