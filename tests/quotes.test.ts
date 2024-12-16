import { test, expect } from "@playwright/test";

import { mockServer } from "../mocks/node";

test.describe("/quotes", () => {
  test.beforeAll(() => {
    mockServer.listen();
  });

  test.afterAll(() => {
    mockServer.close();
  });

  test.beforeEach(() => {
    mockServer.resetHandlers();
  });

  test("displays mocked data", async ({ page }) => {
    await page.goto("/quotes");

    const recipeElements = page.locator('[data-testid="quote"]');

    await expect(await recipeElements.count()).toBe(1);
    await expect(page.getByText("Just Chill")).toBeVisible();
  });
});
