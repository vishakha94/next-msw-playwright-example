import QuotesClient from "./quotes-client";

async function getQuotes() {
  const res = await fetch("https://dummyjson.com/quotes?limit=3&skip=10", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return await res.json();
}

export default async function QuotesPage() {
  const { quotes, error } = await getQuotes();
  return <QuotesClient quotes={quotes} />;
}

export const dynamic = "force-dynamic";
