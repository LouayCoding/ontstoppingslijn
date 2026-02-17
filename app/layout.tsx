import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schoorsteenservice | Schoorsteen Vegen & Inspectie",
  description:
    "Professionele schoorsteenservice door heel Nederland. Schoorsteen vegen vanaf €39,50. Bel direct: 085 060 47 XX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
