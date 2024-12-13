import RecipesClient from "./recipes-client";

async function getRecipes() {
  const res = await fetch(
    "https://dummyjson.com/recipes?limit=10&skip=10&select=id,name,image,cuisine",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return res.json();
}

export default async function RecipesPage() {
  const { recipes, error } = await getRecipes();
  return <RecipesClient recipes={recipes} />;
}
