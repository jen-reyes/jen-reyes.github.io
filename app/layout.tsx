import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const poppinsBody = Poppins({
  variable: "--body-font",
  weight: "300",
  subsets: ["latin"]
});

const poppinsTitle = Poppins({
  variable: "--title-font",
  weight: "400",
  subsets: ["latin"]
});

const poppinsTitleMedium = Poppins({
  variable: "--title-font",
  weight: "500",
  subsets: ["latin"]
});

const poppinsTitleBold = Poppins({
  variable: "--title-font",
  weight: "600",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Jen Reyes",
  description: "Jennifer Reyes Studios"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsBody.variable} ${poppinsBody.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
