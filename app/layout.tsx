import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE } from "@/constants/site";
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
  // Body face: not the LCP element — must not compete with CSS and the
  // display face for first-paint bandwidth on slow connections.
  preload: false,
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

const TITLE = `${SITE.name} — ${SITE.slogan}`;
const DESCRIPTION =
  `${SITE.name} builds AI products that strengthen human judgment. ${SITE.product.name} provides explainable AI chart analysis for forex, crypto, and financial markets.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://getavenax.com"),
  title: {
    default: TITLE,
    template: "%s — AVENAX",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
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
