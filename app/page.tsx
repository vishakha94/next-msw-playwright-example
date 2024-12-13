"use client";

import Link from "next/link";
import { Theme } from "@radix-ui/themes";

import { RecipeCard } from "./components/RecipeCard";

export default function Home() {
  return (
    <Theme>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Next.js 14 with Custom Server, Radix UI, and Tailwind CSS
        </h1>
        <p className="mb-4">
          This is a sample page to demonstrate the setup with Next.js 14, Radix
          UI, and Tailwind CSS.
        </p>
        <div className="space-y-4">
          <div className="space-x-4">
            <Link href="/api/hello" className="text-blue-500 hover:underline">
              Check API Route
            </Link>
          </div>

          <div style={{ width: "240px" }}>
            <RecipeCard
              title="Japanese Ramen"
              imageSrc="https://cdn.dummyjson.com/recipe-images/16.webp"
              imageAlt="A bowl of ramen with chashu pork, soft-boiled egg, and green onions"
              description="Traditional ramen with tender chashu pork, perfectly jammy eggs, and fresh green onions in a rich broth."
            />
          </div>
        </div>
      </div>
    </Theme>
  );
}
