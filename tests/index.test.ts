import { test, expect } from '@playwright/test'
// import { setupMockServer } from './mockServer'

test.describe.skip('Home Page', () => {
  // const mockServer = setupMockServer()

  // test.beforeAll(async () => {
  //   await mockServer.listen()
  // })

  // test.afterAll(async () => {
  //   await mockServer.close()
  // })

  // test.beforeEach(async () => {
  //   mockServer.resetHandlers()
  // })

  test('displays welcome message and route links', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByText('Welcome!')).toBeVisible();
    await expect(page.getByText('Check out Recipes')).toBeVisible();
    await expect(page.getByText("Check out Quotes")).toBeVisible();
  });
})

