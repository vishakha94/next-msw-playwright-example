import type { RecipesType } from "./recipes-client";
import { RecipesClient } from "./recipes-client";

import { getData } from "../server/getData";

export default async function RecipesPage() {
  const { recipes } = await getData<RecipesType>(
    "/recipes?limit=3&skip=10&select=id,name,image,cuisine"
  );

  return <RecipesClient recipes={recipes} />;
}

export const dynamic = "force-dynamic";
