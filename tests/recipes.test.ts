import {
  test,
  expect,
  http,
  HttpResponse,
  passthrough,
} from "next/experimental/testmode/playwright/msw";

// import { mockServer } from "../mocks/node";

test.use({
  mswHandlers: [
    [
      http.get("https://dummyjson.com/recipes", () => {
        return HttpResponse.json({
          recipes: [
            {
              id: 1,
              name: "Mocked Recipe",
              image: "https://cdn.dummyjson.com/recipe-images/16.webp",
              cuisine: "Mocked cuisine",
            },
          ],
        });
      }),
      // allow all non-mocked routes to pass through
      http.all("*", () => {
        return passthrough();
      }),
    ],
    { scope: "test" },
  ],
});

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

  test("displays mocked data", async ({ page, msw }) => {
    msw.use(
      http.get("https://dummyjson.com/recipes", () => {
        return HttpResponse.json({
          recipes: [
            {
              id: 1,
              name: "Mocked Recipe",
              image: "https://cdn.dummyjson.com/recipe-images/16.webp",
              cuisine: "Mocked cuisine",
            },
          ],
        });
      })
    );
    await page.goto("/recipes");

    const recipeElements = page.locator('[data-testid="recipe"]');

    await expect(await recipeElements.count()).toBe(1);
    await expect(page.getByText("Mocked Recipe")).toBeVisible();
  });
});
