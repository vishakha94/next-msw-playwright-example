import { test, expect } from "@playwright/test";

// import { mockServer } from "../mocks/node";

test.describe("/recipes", () => {
  // test.beforeAll(() => {
  //   mockServer.listen();
  // });

  // test.afterAll(() => {
  //   mockServer.close();
  // });

  // test.beforeEach(() => {
  //   mockServer.resetHandlers();
  // });

  test("displays mocked data", async ({ page }) => {
    await page.goto("/recipes");

    const recipeElements = page.locator('[data-testid="recipe"]');

    await expect(await recipeElements.count()).toBe(1);
    await expect(page.getByText("Mocked Recipe")).toBeVisible();
  });
});
