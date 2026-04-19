import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://golfline.com"),
  title: {
    default: "Golfline — Premium Full-Cycle Knitwear Manufacturing",
    template: "%s | Golfline",
  },
  description:
    "Premium flat-knit manufacturer in Ludhiana, India. 35+ years of expertise in cashmere, merino, lambswool, and cotton knitwear for D2C brands worldwide.",
  keywords: [
    "knitwear manufacturer",
    "flat knit manufacturing",
    "premium knitwear India",
    "cashmere manufacturer Ludhiana",
    "private label knitwear",
    "D2C knitwear supplier",
    "merino wool manufacturer",
    "sweater manufacturer India",
    "knitwear factory Ludhiana",
    "wool sweater manufacturer",
    "streetwear knitwear manufacturer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Golfline — Premium Full-Cycle Knitwear Manufacturing",
    description:
      "Premium flat-knit manufacturer in Ludhiana, India. 35+ years of expertise in cashmere, merino, lambswool, and cotton knitwear for D2C brands worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "Golfline",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golfline — Premium Full-Cycle Knitwear Manufacturing",
    description:
      "Premium flat-knit manufacturer in Ludhiana, India. 35+ years of expertise in cashmere, merino, lambswool, and cotton knitwear.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Golfline",
  description: "Premium full-cycle flat-knit knitwear manufacturer",
  foundingDate: "1989",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "enquiries@golfline.com",
    contactType: "sales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
