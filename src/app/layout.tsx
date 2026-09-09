import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nova Spark — Digital Growth Agency in Bhubaneswar",
    template: "%s | Nova Spark"
  },
  description: "Nova Spark is a premium digital growth agency in Bhubaneswar. We combine strategy, creativity, technology and performance marketing to build brands that move people.",
  keywords: ["digital marketing", "SEO", "performance marketing", "social media", "Bhubaneswar", "digital agency"],
  authors: [{ name: "Nova Spark" }],
  openGraph: {
    title: "Nova Spark — Digital Growth Agency",
    description: "Strategy, creativity, technology and performance marketing engineered to turn attention into measurable growth.",
    url: "https://novaspark.in",
    siteName: "Nova Spark",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Spark — Digital Growth Agency",
    description: "Strategy, creativity, technology and performance marketing engineered to turn attention into measurable growth.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
