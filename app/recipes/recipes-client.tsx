"use client";

import { Flex } from "@radix-ui/themes";

import { RecipeCard } from "../components/RecipeCard";

interface recipeType {
  id: number;
  name: string;
  image: string;
  cuisine: string;
}

interface RecipesClientProps {
  recipes: recipeType[];
}

export default function RecipesClient({ recipes }: RecipesClientProps) {
  console.log({ recipes });

  return (
    <>
      <Flex gap="3" data-test-id="recipes">
        {recipes.map((recipe) => (
          <div style={{ width: "240px" }} key={recipe.id} data-testid="recipe">
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
