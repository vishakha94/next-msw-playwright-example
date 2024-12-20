import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Next.js with Radix UI",
  description: "A sample app using Next.js and Radix UI",
};

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
