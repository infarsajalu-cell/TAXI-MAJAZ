import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wayanad Taxi | Cab Booking Sulthan Bathery — Majaz Tours",
  description:
    "Trusted Wayanad taxi service since 2000. Book AC cabs in Sulthan Bathery & Wayanad — Etios, Ertiga, Innova Crysta. Airport transfers, sightseeing, outstation. Call 9744132005.",
  keywords: [
    "wayanad taxi",
    "wayanad cab",
    "taxi service in wayanad",
    "cab booking wayanad",
    "sulthan bathery taxi",
    "sulthan bathery cab",
    "taxi service in sulthan bathery",
    "cab booking sulthan bathery",
    "airport taxi from wayanad to calicut",
    "wayanad sightseeing taxi",
    "cheapest taxi in wayanad",
    "24 hour taxi wayanad",
    "airport taxi from sulthan bathery to calicut",
    "sulthan bathery sightseeing taxi",
    "cheapest taxi in sulthan bathery",
    "24 hour taxi sulthan bathery",
    "taxi service wayanad",
    "tourist taxi wayanad kerala",
    "innova crysta hire wayanad",
    "naiketty taxi service",
    "wayanad tour package cab",
    "airport taxi wayanad",
    "kerala tourist taxi",
    "outstation cab wayanad",
    "majaz tours travels wayanad",
    "taxi from wayanad to calicut",
    "wayanad to bangalore cab",
    "airport taxi from wayanad to bangalore",
    "airport taxi from sulthan bathery to bangalore",
    "ertiga taxi wayanad",
    "etios cab wayanad",
  ],
  openGraph: {
    title: "Majaz Tours & Travels — #1 Taxi Service in Wayanad Since 2000",
    description:
      "26+ years of trusted taxi service in Wayanad & Sulthan Bathery. AC cabs, Airport Transfers, Sightseeing Tours. Book on WhatsApp.",
    url: "https://wayanadcabmajaz.com",
    siteName: "Majaz Tours & Travels",
    locale: "en_IN",
    type: "website",
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
  metadataBase: new URL("https://wayanadcabmajaz.com"),
  icons: {
    icon: "/images/logo1.png",
    shortcut: "/images/logo1.png",
    apple: "/images/logo1.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Majaz Tours & Travels",
  alternateName: "Majaz Taxi Wayanad",
  description:
    "Wayanad's most trusted taxi service since 2000. Book AC cabs for airport transfers, sightseeing, and outstation trips from Sulthan Bathery, Naiketty, and across Wayanad, Kerala.",
  url: "https://wayanadcabmajaz.com",
  telephone: ["+919744132005", "+919495018055"],
  foundingDate: "2000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Naikatty PO",
    addressLocality: "Sulthan Bathery",
    addressRegion: "Wayanad, Kerala",
    postalCode: "673592",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.6645",
    longitude: "76.2711",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    { "@type": "Place", name: "Wayanad, Kerala" },
    { "@type": "Place", name: "Sulthan Bathery, Kerala" },
    { "@type": "Place", name: "Naiketty, Wayanad" },
    { "@type": "Place", name: "Calicut, Kerala" },
  ],
  priceRange: "$$",
  image: "https://wayanadcabmajaz.com/og-image.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter bg-ivory text-charcoal antialiased">
        <Preloader />
        <CursorGlow />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
