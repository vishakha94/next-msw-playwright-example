import https from "https";

import RecipesClient from "./recipes-client";

// import { getData } from "../server/getData";

interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
}

async function getRecipes(): Promise<{ recipes: Recipe[] }> {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "dummyjson.com",
      path: "/recipes?limit=3&skip=10&select=id,name,image,cuisine",
      method: "GET",
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(new Error("Failed to parse response data"));
        }
      });
    });

    req.on("error", (error) => {
      reject(new Error(`Failed to fetch recipes: ${error.message}`));
    });

    req.end();
  });
}

export default async function RecipesPage() {
  // const { recipes } = await getData<{ recipes: Recipe[] }>(
  //   "/recipes?limit=3&skip=10&select=id,name,image,cuisine"
  // );
  const { recipes } = await getRecipes();
  return <RecipesClient recipes={recipes} />;
}

export const dynamic = "force-dynamic";
