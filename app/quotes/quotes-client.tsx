"use client";

interface quoteType {
  id: number;
  quote: string;
  author: string;
}

type QuotesProps = quoteType[];

export interface QuotesType {
  quotes: QuotesProps;
}

export function QuotesClient({ quotes }: QuotesType) {
  console.log({ quotes });
  return (
    <ul>
      {quotes.map((quote) => (
        <li key={quote.id} data-testid="quote">
          <strong>{quote.quote}</strong>
          <br />
          <div>
            <h3>{quote.author}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
