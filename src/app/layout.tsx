import type { Metadata, Viewport } from "next";
import { STIX_Two_Text, VT323 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { SITE } from "@/lib/site";

const stix = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export const viewport: Viewport = { themeColor: "#070605" };

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      sameAs: [SITE.instagram.url],
    },
    { "@type": "WebSite", name: SITE.name, url: SITE.url, inLanguage: "tr" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${stix.variable} ${vt323.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:bg-parchment focus:px-4 focus:py-2 focus:text-ink"
        >
          İçeriğe geç
        </a>
        <SmoothScrollProvider>
          <Header />
          <main id="icerik" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
        <div className="crt-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
