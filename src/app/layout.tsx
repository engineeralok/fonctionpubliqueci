import type { Metadata } from "next";
import {
  Open_Sans,
  Roboto_Mono,
  Source_Sans_3,
  Spectral,
} from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto-mono",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spectral",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-sans-pro",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

const cssLinks = [
  { href: "/transformation/css/site-0.css", media: "all" },
  { href: "/transformation/css/site-1.css", media: "all" },
  { href: "/transformation/css/site-2.css", media: "print" },
  { href: "/transformation/css/site-3.css", media: "all" },
  { href: "/transformation/css/site-4.css", media: "print" },
  { href: "/transformation/css/site-5.css", media: "all" },
  { href: "/transformation/css/site-6.css", media: "print" },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://www.transformation.gouv.fr"),
  title: "Accueil | transformation.gouv.fr",
  description:
    "Site officiel du Ministère de la Fonction publique et de la Réforme de l’État.",
  alternates: {
    canonical: "/",
  },
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-fr-scheme="light">
      <head>
        <meta
          name="format-detection"
          content="telephone=no,date=no,address=no,email=no,url=no"
        />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <link rel="icon" href="/transformation/favicon.ico" />
        {cssLinks.map((link) => (
          <link key={link.href} rel="stylesheet" {...link} />
        ))}
      </head>
      <body
        className={`path-frontpage page-node-type-accueil ${robotoMono.variable} ${spectral.variable} ${sourceSans.variable} ${openSans.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
