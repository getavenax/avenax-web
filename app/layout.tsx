import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const archivo = localFont({
  src: "../styles/fonts/archivo/Archivo-Variable-latin.woff2",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSans = localFont({
  src: "../styles/fonts/instrument-sans/InstrumentSans-Variable-latin.woff2",
  weight: "400 700",
  variable: "--font-instrument-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../styles/fonts/geist-mono/GeistMono-Variable-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
  // Mono is the data/instrument face; it does not appear above the fold on
  // the brand site, so it must not compete for preload bandwidth.
  preload: false,
});

export const metadata: Metadata = {
  title: "AVENAX — Next Standard.",
  description:
    "AVENAX builds autonomous AI products that help people think better, work faster, and create more. Product One: Insight — educational AI chart analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
