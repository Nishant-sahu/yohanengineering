import Footer from "@/components/shared/footer";
import "@/styles/pagination.css";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Yohan Engineering",
  description: "Building Today & Tomorrow Your Trusted Construction & Maintenance Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <title>Yohan Engineering - Your Trusted Construction & Maintenance Partner</title> 
      <body>
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
