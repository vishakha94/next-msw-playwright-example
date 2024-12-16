import "@radix-ui/themes/styles.css";
import "./globals.css";

import { Inter } from "next/font/google";

if (process.env.NEXT_RUNTIME === "nodejs") {
  import("../mocks/node").then(({ mockServer }) => {
    mockServer.events.on("request:match", ({ request }) => {
      console.log("Outgoing:", request.method, request.url);
    });
    mockServer.listen();
  });
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
