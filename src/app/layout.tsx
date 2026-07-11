import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";
import { SITE_URL, SITE_NAME, getHotelJsonLd } from "@/lib/seo";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const title = "Hotel Millian | Hospedagem em Jundiaí, SP";
const description =
  "Hotel familiar na Av. Nove de Julho, Jundiaí-SP, a 400m do Jundiaí Shopping. Quartos Standard e Suíte, café da manhã farto e estrutura para eventos corporativos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "hotel em Jundiaí",
    "hotel Jundiaí SP",
    "hospedagem Jundiaí",
    "hotel Av. Nove de Julho",
    "hotel para eventos corporativos Jundiaí",
    "Hotel Millian",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getHotelJsonLd();

  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1 pt-28">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
