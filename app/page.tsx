"use client";

import Link from "next/link";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <Theme>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <div className="space-y-4">
          <div className="space-x-4">
            <Link href="/recipes" className="text-blue-500 hover:underline">
              Check out Recipes
            </Link>
            <Link href="/quotes" className="text-blue-500 hover:underline">
              Check out Quotes
            </Link>
          </div>
        </div>
      </div>
    </Theme>
  );
}
