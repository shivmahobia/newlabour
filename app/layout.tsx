import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterSlider from "../components/FooterSlider";
import NavBar from "../components/NavBar";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Shramevjayate",
  description: "CG Labour Department Govt. of Chhattisgarh"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <NavBar />
          {children}
          <FooterSlider />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
