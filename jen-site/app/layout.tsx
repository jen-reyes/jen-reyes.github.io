import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const poppinsBody = Poppins({
  variable: "--body-font",
  weight: "300",
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
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
