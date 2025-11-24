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
  metadataBase: new URL("https://www.transformation.gouv.fr"),
  title: "Accueil | transformation.gouv.fr",
  description:
    "Site officiel du Ministère de la Fonction publique et de la Réforme de l’État.",
  alternates: {
    canonical: "/",
  },
};

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
      <body className="path-frontpage page-node-type-accueil">
        {children}
      </body>
    </html>
  );
}
