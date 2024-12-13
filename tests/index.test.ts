import { test, expect } from '@playwright/test'
import { setupMockServer } from './mockServer'

test.describe('Home Page', () => {
  const mockServer = setupMockServer()

  test.beforeAll(async () => {
    await mockServer.listen()
  })

  test.afterAll(async () => {
    await mockServer.close()
  })

  test.beforeEach(async () => {
    mockServer.resetHandlers()
  })

  test('displays welcome message and API link', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.getByText('Welcome to Next.js 14 with Custom Server')).toBeVisible()
    await expect(page.getByText('Check API Route')).toBeVisible()
  })

  test('API route returns mocked data', async ({ page }) => {
    await page.goto('/')
    
    const apiLink = page.getByText('Check API Route')
    const [response] = await Promise.all([
      page.waitForResponse('**/api/hello'),
      apiLink.click()
    ])

    const responseData = await response.json()
    expect(responseData).toEqual({ message: 'Mocked Hello from the API! (Next.js 14)' })
  })
})

