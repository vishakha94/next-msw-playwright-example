import type { QuotesType } from "./quotes-client";
import { QuotesClient } from "./quotes-client";

import { getData } from "../server/getData";

export default async function QuotesPage() {
  const { quotes } = await getData<QuotesType>("/quotes?limit=3&skip=10");
  return <QuotesClient quotes={quotes} />;
}

export const dynamic = "force-dynamic";
