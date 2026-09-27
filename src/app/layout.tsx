import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://subhashinienterprises.com"),
  title: "Subhashini Enterprises | Fresh Produce Exporter from Kerala",
  description:
    "Subhashini Enterprises is a Kerala-based merchant exporter specializing in fresh fruits, vegetables and agricultural produce for international markets, connecting trusted Indian growers with global destinations like Maldives.",
  keywords: [
    "Subhashini Enterprises",
    "Kerala produce exporter",
    "Fresh vegetables export India",
    "Fresh fruits export Kerala",
    "Maldives agricultural supplier",
    "Vaikom Alappuzha exporter",
    "Merchant exporter Kerala",
    "Subh Greenz",
    "Shiva Exporting",
    "Subhashini Tower",
  ],
  authors: [{ name: "Subhashini Enterprises" }],
  openGraph: {
    title: "Subhashini Enterprises | Fresh Produce Exporter from Kerala",
    description:
      "25+ years of experience delivering quality fresh produce from Kerala to international markets.",
    url: "https://subhashinienterprises.com",
    siteName: "Subhashini Enterprises",
    images: [
      {
        url: "/images/landing-page-reference.png",
        width: 1200,
        height: 630,
        alt: "Subhashini Enterprises Fresh Produce Export",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhashini Enterprises | Fresh Produce Exporter from Kerala",
    description:
      "Connecting India's agricultural freshness with international markets.",
    images: ["/images/landing-page-reference.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-[#fbfbf8] text-[#121c17] selection:bg-[#0b3322] selection:text-white">
        {children}
      </body>
    </html>
  );
}
