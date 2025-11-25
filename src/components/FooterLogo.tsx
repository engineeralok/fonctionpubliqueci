"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterLogo() {
  return (
    <Link
      href="/"
      title="Ministère de la Fonction publique et de la Réforme de l'État - Retour à l'accueil du site"
      className="footer-logo-wrapper"
    >
      <Image
        alt="Ministère de la Fonction publique et de la Réforme de l'État"
        src="/images/mobilelogo1.png"
        width={300}
        height={110}
        className="object-contain footer-logo footer-logo--mobile"
        priority
      />
      <Image
        alt="Ministère de la Fonction publique et de la Réforme de l'État"
        src="/images/mobilelogo1.png"
        width={340}
        height={124}
        className="object-contain footer-logo footer-logo--desktop"
        priority
      />
    </Link>
  );
}

