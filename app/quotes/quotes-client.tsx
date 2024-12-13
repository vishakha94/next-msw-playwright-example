"use client";

interface quoteType {
  id: number;
  quote: string;
  author: string;
}

type QuotesProps = quoteType[];

interface QuotesClientProps {
  quotes: QuotesProps;
}

export default function QuotesClient({ quotes }: QuotesClientProps) {
  console.log({ quotes });
  return (
    <ul>
      {quotes.map((quote) => (
        <li key={quote.id}>
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
