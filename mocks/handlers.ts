import { http, HttpResponse } from "msw";

const recipeMocks = http.get("https://dummyjson.com/recipes", () => {
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
});

const quotesMocks = http.get("https://dummyjson.com/quotes", () => {
  return HttpResponse.json({
    quotes: [
      {
        id: 1,
        quote: "Just chill",
        author: "John Doe",
      },
    ],
  });
});
export const handlers = [recipeMocks, quotesMocks];
