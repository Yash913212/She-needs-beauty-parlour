import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sheneedsbeauty.com"),
  title: "She Needs Beauty Parlour | Contemporary Luxury & Bridal Beauty",
  description:
    "Discover personalised beauty services, bridal makeup, skincare, and hair styling in Hyderabad. Quiet luxury, expert care, and effortless confidence.",
  keywords: [
    "She Needs Beauty Parlour",
    "Bridal Makeup Hyderabad",
    "Luxury Beauty Salon",
    "Hair Styling",
    "Hydra Facials",
    "Beauty Parlour Hyderabad",
    "Beauty Parlour Telangana"
  ],
  authors: [{ name: "She Needs Beauty Parlour" }],
  openGraph: {
    title: "She Needs Beauty Parlour | Enhance Your Natural Beauty",
    description:
      "Contemporary luxury, feminine elegance, and personalised care. Experience bespoke bridal makeup and salon treatments.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "She Needs Beauty Parlour - Natural Beauty"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#F6F0E8] text-[#30221F] selection:bg-[#C88F82]/30 selection:text-[#30221F] antialiased">
        {children}
      </body>
    </html>
  );
}
