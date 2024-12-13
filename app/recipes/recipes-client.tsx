"use client";

interface recipeType {
  id: number;
  quote: string;
  author: string;
}

type RecipesProps = recipeType[];

interface RecipesClientProps {
  recipes: RecipesProps;
}

export default function QuotesClient({ recipes }: RecipesClientProps) {
  console.log({ recipes });

  return <div>Hey</div>;
}
