"use client";

import { Flex } from "@radix-ui/themes";

import { RecipeCard } from "../components/RecipeCard";

interface recipeType {
  id: number;
  name: string;
  image: string;
  cuisine: string;
}

export interface RecipesType {
  recipes: recipeType[];
}

export function RecipesClient({ recipes }: RecipesType) {
  console.log({ recipes });

  return (
    <>
      <Flex gap="3" data-testid="recipes">
        {recipes.map((recipe) => (
          <div
            style={{ width: "240px" }}
            key={recipe.id}
            data-testid="recipe"
          >
            <RecipeCard
              title={recipe.name}
              imageSrc={recipe.image}
              imageAlt={recipe.name}
              description={recipe.cuisine}
            />
          </div>
        ))}
      </Flex>
    </>
  );
}
