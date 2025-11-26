import type { Metadata } from "next";
import "./globals.css";

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
  metadataBase: new URL("https://fonctionpublique.gouv.ci"),
  title: "Accueil | fonctionpublique.gouv.ci",
  description:
    "Site officiel du Ministère de la Fonction publique et de la Modernisation de l'Administration.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
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
        {/* Standard favicon */}
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
        {/* Apple touch icon for iOS devices */}
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        {/* Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon.png" />
        {/* Windows tiles */}
        <meta name="msapplication-TileImage" content="/images/favicon.png" />
        <meta name="msapplication-TileColor" content="#FF914D" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#FF914D" />
        {cssLinks.map((link) => (
          <link key={link.href} rel="stylesheet" {...link} />
        ))}
      </head>
      <body className="path-frontpage page-node-type-accueil">
        <Header />
        {children}
      </body>
    </html>
  );
}
